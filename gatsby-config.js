require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "gatsby-corporate-demo",
    description: "Gatsbyで作成したコーポレートサイトのデモです",
    author: "ratovia"
  },
  plugins: [
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: process.env.GATSBY_DB_HOST,
          user: process.env.GATSBY_DB_USER,
          database: process.env.GATSBY_DB_DATABASE
        },
        queries: [
          {
            statement: 'SELECT * FROM companies',
            idFieldName: 'id',
            name: 'companies'
          },
          {
            statement: 'SELECT * FROM notifications',
            idFieldName: 'id',
            name: 'notifications'
          },
          {
            statement: 'SELECT * FROM recruits',
            idFieldName: 'id',
            name: 'recruits'
          }
        ]
      }
    }
  ],
}
