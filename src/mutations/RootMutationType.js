const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql");
const BookType = require("../gq-types/BookType");
const { books } = require("../data/data");

const RootMutationType = new GraphQLObjectType({
    name : 'Mutation' ,
    description : 'The root mutation type' ,
    fields  : () => ({
        addBook : {
            type: BookType ,
            description  : "Add a new book type " ,
            args :  {
                authorId : { type: GraphQLNonNull(GraphQLInt) },
                name: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve : (parent, args) => {
                const newBook  =  { 
                    id : books.length + 1,
                    authorId : args.authorId ,
                    name : args.name
                }
                 books.push(newBook)
                 return newBook
            }
        
        }
    })
})


module.exports =  RootMutationType