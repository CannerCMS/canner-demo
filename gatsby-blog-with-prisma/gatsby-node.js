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
            path: `/${slug(post.name)}/`,
            component: blogPost,
            context: {
              slug: slug(post.name),
              previous,
              next,
            },
          })
        })
      })
    )
  })
}
