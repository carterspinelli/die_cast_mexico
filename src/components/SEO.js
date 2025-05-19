import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

function SEO({ description, lang, meta = [], title, image }) {
  const intl = useIntl();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const siteUrl = site.siteMetadata?.siteUrl;
  const imageUrl = image ? `${siteUrl}${image}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang: lang || intl.locale,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        // Add image meta if image is provided
        ...(imageUrl
          ? [
              {
                property: `og:image`,
                content: imageUrl,
              },
              {
                name: `twitter:image`,
                content: imageUrl,
              },
            ]
          : []),
        // Concatenate additional meta props
      ].concat(meta)}
    />
  );
}

export default SEO;
