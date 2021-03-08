import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
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

  return <Helmet title={site.siteMetadata.title}></Helmet>;
};

export default Seo;
