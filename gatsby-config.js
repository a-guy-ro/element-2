module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "test",
  },
  plugins: [
    // "gatsby-plugin-mdx",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "pages",
    //     path: "./src/pages/",
    //   },
    //   __key: "pages",
    // },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Merriweather Sans`,
            file: `https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap`,
          },
          {
            name: 'Roboto',
            file: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap',

          },
        ],
      },
    },
  ],
};
