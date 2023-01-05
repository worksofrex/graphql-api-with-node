const { GraphQLObjectType, GraphQLList } = require("graphql");
const BookType = require("./BookType");
const { books, authors } = require("../data/data");
const { AuthorType } = require("./AuthorType");

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'This is the default root query',
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            description: 'A list of books',
            resolve: () => books
        },
        authors:
        {
            type: new GraphQLList(AuthorType),
            description: 'Authors who write books',
            resolve: () => authors
        }
    })
})

module.exports = { RootQueryType }
