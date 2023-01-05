const express = require('express')
const dotenv = require('dotenv')
const expressGraphQL = require('express-graphql');
const { schema } = require('./schema/schema');
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express()

app.use('/graphql', expressGraphQL.graphqlHTTP({
    schema : schema ,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`🚀 GraphQL server is running on port ${PORT}`)
});