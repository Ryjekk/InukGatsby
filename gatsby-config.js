module.exports = {
  siteMetadata: {
    title: `InukRy - Software Developer`,
    description: `Personal portfolio of Software Developer - Marcin Inuk Ryjewsky. Fullstack Javascript Developer. Currently live in Norway, Oslo and Iceland, Reykjavik.`,
    author: `@ryjewsky`,
    siteUrl: 'https://www.ryjewsky.com/',
    lang: 'en',
    keywords: [
      'React',
      'Gatsby',
      'Jamstack',
      'Portfolio',
      'Ryjewsky',
      'Ryjewski',
      'Javascript',
      'Fullstack',
      'Developer',
      'Dev',
      'Strapi',
      'Netlify',
      'Iceland',
      'Reykjavik',
      'Node',
      'Norway',
      'Oslo'
    ]
  },
  plugins: [
    `gatsby-plugin-netlify`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-offline`,
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
        icons: [
          {
            src: 'src/images/icons/logo/favicon-32x32.png',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        crossOrigin: `use-credentials`
      }
    }
  ]
};
