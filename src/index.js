const express = require('express')
const dotenv = require('dotenv')
const expressGraphQL = require('express-graphql');
const { schema } = require('./schema/schema');
const BookType = require('./gq-types/BookType');
const { AuthorType } = require('./gq-types/AuthorType');
const { GraphQLList, GraphQLNonNull } = require('graphql');
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express()

app.use('/graphql', expressGraphQL.graphqlHTTP({
    schema : schema ,
    graphiql: true
}))

// console.log(BookType , AuthorType, GraphQLNonNull(GraphQLList(BookType)))

app.listen(PORT, () => {
    console.log(`🚀 GraphQL server is running on port ${PORT}`)
});