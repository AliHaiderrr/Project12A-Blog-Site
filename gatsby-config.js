
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
     title: `Gatsby Blog Site By ALi Haider`,
  description: `Write your site description here!`,
  author: `@alilogic`,
  },
  plugins: [
    
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true,
      },
    },
    
  ],
}
