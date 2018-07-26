import React from 'react'
import {Link, graphql} from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import excerptHtml from '@canner/excerpt-html'
import dayjs from 'dayjs';

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.prismaGraphQl.posts')
    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map((node) => {
          const postSlug = node.slug
          const title = node.name || postSlug;
          return (
            <div key={node.id}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={`/posts/${postSlug}`}>
                  {title}
                </Link>
              </h3>
              <small>{dayjs(node.postDate).format('YYYY / MM / DD')}</small>
              <p dangerouslySetInnerHTML={{ __html: node.content && excerptHtml(node.content.html) }} />
            </div>
          )
        })}
      </Layout>
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
        slug
        content {
          html
        }
      }
    }
  }
`
