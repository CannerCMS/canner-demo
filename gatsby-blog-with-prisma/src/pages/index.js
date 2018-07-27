import React from 'react';
import {Link, graphql} from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import excerptHtml from '@canner/excerpt-html';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Bio from '../components/Bio';
import Layout from '../components/layout';
import { rhythm } from '../utils/typography';
// import Author from '../components/Author';

class BlogIndex extends React.Component {
  static propTypes = {
    location: PropTypes.any
  }

  render() {
    const {title, author, thumbUrl, twitter, description} = get(this, 'props.data.site.siteMetadata');
    const posts = get(this, 'props.data.allPrismaPost.edges').map(edge => edge.node);
    return (
      <Layout title={title} location={this.props.location}>
        <Helmet title={title} description={description} />
        <Bio name={author} profilePic={thumbUrl} twitter={twitter} />
        {posts.map((node) => {
          const postSlug = node.slug;
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
              {
                // <Author name={get(node, 'author.name')} profilePic={get(node, 'author.thumb')} />
              }
              <small>{dayjs(node.postDate).format('YYYY / MM / DD')}</small>
              <p dangerouslySetInnerHTML={{ __html: node.content && excerptHtml(node.content.html) }} />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        author
        thumbUrl
        twitter
        description
      }
    }
    
    allPrismaPost(sort: {fields: [postDate], order: DESC}) {
      edges {
        node {
          id
          slug
          name
          postDate
          #author {
          #  name
          #  thumb
          #}
          content {
            html
          }
        }
      }
    }
  }
`;
