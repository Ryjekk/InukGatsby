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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'InukRy - Software Developer',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#121212',
        theme_color: '#eee',
        display: 'browser',
        icon: 'src/images/icons/logo/favicon-32x32.png',
        crossOrigin: `use-credentials`
      }
    }
  ]
};
