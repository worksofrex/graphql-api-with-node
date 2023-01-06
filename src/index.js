const express = require('express')
const dotenv = require('dotenv')
const expressGraphQL = require('express-graphql');
const { schema } = require('./schema/schema');
const BookType = require('./gq-types/BookType');
const { AuthorType } = require('./gq-types/AuthorType');
const { GraphQLList, GraphQLNonNull } = require('graphql');
const cors =  require('cors')

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express()

app.use(cors({
    origin : '*'
}))

app.use('/graphql', expressGraphQL.graphqlHTTP({
    schema : schema ,
    graphiql: true
}))

app.use(()=> {
    console.log(' A hit')
})


// console.log(BookType , AuthorType, GraphQLNonNull(GraphQLList(BookType)))

app.listen(PORT, () => {
    console.log(`🚀 GraphQL server is running on port ${PORT}`)
});