const gravatar = require('gravatar');

module.exports = {
  siteMetadata: {
    title: 'Canner & Gatsby Starter Blog',
    author: 'wwwy3y3',
    thumbUrl: gravatar.url('wwwy3y3@gmail.com'),
    twitter: 'wwwy3y3',
    description: 'A starter blog demonstrating what Gatsby and Canner can do.',
    siteUrl: 'https://www.canner.io',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
