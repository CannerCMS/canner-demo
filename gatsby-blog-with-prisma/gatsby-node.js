const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slug = require('slug')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          query PrismaQuery {
            prismaGraphQl {
              posts {
                id
                name
                postDate
                content {
                  html
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.prismaGraphQl.posts;

        _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1];
          const next = index === 0 ? null : posts[index - 1];
          createPage({
            path: `/posts/${slug(post.name)}/`,
            component: blogPost,
            context: {
              slug: slug(post.name),
              previous: previous && {...previous, slug: slug(previous.name)},
              next: next && {...next, slug: slug(next.name)},
            },
          })
        })
      })
    )
  })
}


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'PrismaGraphQL') {
    // add slug to per post
    node.posts.map(post => {
      post.slug = slug(post.name);
    });
  }

}