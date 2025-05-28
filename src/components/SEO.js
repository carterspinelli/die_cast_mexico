import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLanguage } from "../context/LanguageContext";

function SEO({ description, lang, meta = [], title, image }) {
  let language = 'en';
  try {
    // Try to use the language context, but provide a fallback if it's not available
    const langContext = useLanguage();
    language = langContext?.language || 'en';
  } catch (error) {
    // Fallback if the context is not available (e.g., during SSR)
    console.warn("Language context not available, using default language");
  }
  
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
  const imageUrl = image ? `${siteUrl}${image}?v=3` : `${siteUrl}/images/die_cast_opengraph_optimized.png?v=3`;
  const ogDescription = "Professional Die Casting Solutions in Mexico";

  return (
    <Helmet
      htmlAttributes={{
        lang: lang || language,
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
          content: title || "Die Cast Mexico - Professional Die Casting Solutions",
        },
        {
          property: `og:description`,
          content: ogDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:site_name`,
          content: "Die Cast Mexico",
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
        // Add OpenGraph image - always include the tool design image
        {
          property: `og:image`,
          content: imageUrl,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          property: `og:image:type`,
          content: `image/png`,
        },
        {
          property: `og:image:alt`,
          content: `Professional Die Casting Solutions in Mexico`,
        },
        {
          name: `twitter:image`,
          content: imageUrl,
        },
        // Concatenate additional meta props
      ].concat(meta)}
    />
  );
}

export default SEO;
