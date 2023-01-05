const { GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } = require("graphql");
const { authors, books } = require("../data/data");
const { AuthorType } = require("./AuthorType");

const NameType  = new GraphQLObjectType({
    name : 'name',
    description : 'The name of the book',
    fields :  {
        fullname : {
            type : GraphQLNonNull(GraphQLString),
            resolve : (book) => book.name ,
        },
        first_letter : {
            type : GraphQLNonNull(GraphQLString),
            resolve : (book) => book.name.split('')[0]
        }

    }
})
const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by an author',
    fields: () => ({
        id : { type: GraphQLNonNull(GraphQLInt) },
        // name : { type: GraphQLNonNull(GraphQLString) },
        name : { 
            type: BookType ,
            resolve : (book) => books.find(book => book.id == book.id)
        },
        authorId : { type: GraphQLNonNull(GraphQLInt) } ,
        author : {
            type : AuthorType ,
            resolve : (book) => {
                return authors.find(author => author.id == book.authorId)
            }
        }

    })
})

module.exports = BookType
