module.exports = {
  siteMetadata: {
    title: `InukRy - Software Developer`,
    description: `Personal portfolio of Software Developer - Marcin Inuk Ryjewsky`,
    author: `@ryjewsky`,
    siteUrl: 'https://ryjewsky.netlify.app/'
  },
  plugins: [
    `gatsby-plugin-netlify`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      },
      __key: 'images'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `db`,
        path: `${__dirname}/src/db`
      }
    }
  ]
};
