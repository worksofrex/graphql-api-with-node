const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList } = require("graphql");
const BookType = require("./BookType");
const { books } = require("../data/data");

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'The author who writes books',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: {
            type: new GraphQLList(BookType),
            resolve: (author) => {
                return books.filter(book => book.authorId == author.id)
            }
        }
    })
})


module.exports = { AuthorType }