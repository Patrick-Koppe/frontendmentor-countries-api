module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "list-countries",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
          url: {
              development: "https://restcountries.eu/rest/v2/all" // on "gatsby develop"
          },
          rootKey: "countries",
          schema: {
              countries: `
                name: String
                capital: String
              `
          }
      }
    }
  ],
};
