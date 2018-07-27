const path = require('path');
const slug = require('slug');
const { request } = require('graphql-request');
const createNodeHelpers = require('gatsby-node-helpers').default;
const { createNodeFactory } = createNodeHelpers({ typePrefix: 'Prisma' });
const PrismaPostNode = createNodeFactory('Post');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  // Create nodes here, generally by downloading data
  // from a remote API.
  const query = `{
    posts {
      id
      name
      postDate
      content
    }
  }`;
  const {posts} = await request('https://us1.prisma.sh/william-chang/prisma/dev', query);

  // Process data into nodes.
  posts.forEach(post => createNode(PrismaPostNode({
    slug: slug(post.name),
    ...post
  })));
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve('./src/templates/blog-post.js');
  const result = await graphql(`
    query PrismaQuery {
      allPrismaPost(sort: {fields: [postDate], order: DESC}) {
        edges {
          node {
            id
            slug
            name
            content {
              html
            }
          }
        }
      }
    }
  `);

  // Create blog posts pages.
  const postEdges = result.data.allPrismaPost.edges;
  postEdges.forEach((postEdge, index) => {
    const post = postEdge.node;
    const previous = index === postEdges.length - 1 ? null : postEdges[index + 1].node;
    const next = index === 0 ? null : postEdges[index - 1].node;
    createPage({
      path: `/posts/${post.slug}/`,
      component: blogPost,
      context: {
        slug: post.slug,
        previous,
        next
      },
    });
  });
};
