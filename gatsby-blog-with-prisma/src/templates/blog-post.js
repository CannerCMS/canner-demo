import React from 'react'
import Helmet from 'react-helmet'
import {Link, graphql} from 'gatsby'
import get from 'lodash/get'
import dayjs from 'dayjs';

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const {title, author, thumbUrl, twitter, description} = get(this, 'props.data.site.siteMetadata')
    const {data, pageContext} = this.props;
    const post = data.prismaPost;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext
    return (
      <Layout title={title} location={this.props.location}>
        <Helmet title={`${post.name} | ${siteTitle}`} />
        <h1>{post.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {dayjs(post.postDate).format('YYYY / MM / DD')}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content && post.content.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio name={author} profilePic={thumbUrl} twitter={twitter} />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {
              previous &&
              <Link to={previous.slug} rel="prev">
                ← {previous.name}
              </Link>
            }
          </li>
          <li>
            {
              next &&
              <Link to={next.slug} rel="next">
                {next.name} →
              </Link>
            }
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        thumbUrl
        twitter
        description
      }
    }

    prismaPost(slug: {eq: $slug}) {
      id
      name
      slug
      postDate
      content {
        html
      }
    }
  }
`
