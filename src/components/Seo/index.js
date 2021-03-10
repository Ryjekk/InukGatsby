import React from 'react';
import { Helmet } from 'react-helmet';
// import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            keywords
            siteUrl
            lang
            title
          }
        }
      }
    `
  );

  const {
    author,
    description,
    keywords,
    siteUrl,
    lang,
    title
  } = site.siteMetadata;

  return (
    <Helmet title={title} htmlAttributes={{ lang }}>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords.join(',')} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
    </Helmet>
  );
};

export default Seo;
