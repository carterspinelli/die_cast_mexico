module.exports = {
  siteMetadata: {
    title: "Die Cast Mexico",
    description: "Professional die casting services in Mexico for automotive, energy, telecommunications, and marine industries.",
    author: "@diecastmexico",
    siteUrl: "https://diecastmexico.com",
    languages: {
      defaultLang: "en",
      langs: ["en", "es"]
    }
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Die Cast Mexico",
        short_name: "Die Cast MX",
        start_url: "/",
        background_color: "#0c1220",
        theme_color: "#1e3a8a",
        display: "minimal-ui",
        icon: "static/favicon.png",
      },
    },

  ],
};
