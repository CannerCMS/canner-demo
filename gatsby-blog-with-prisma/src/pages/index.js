import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import slug from 'slug'

import { graphql } from 'gatsby'
import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.prismaGraphQl.posts')
    
    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map((node) => {
          const postSlug = slug(node.name)
          const title = node.name || postSlug;
          return (
            <div key={node.id}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={postSlug}>
                  {title}
                </Link>
              </h3>
              <small>{node.postDate}</small>
              <p dangerouslySetInnerHTML={{ __html: node.content && node.content.html }} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
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
