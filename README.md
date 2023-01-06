## **graphql-api-with-node**
____

A small repo showing briefly how to  
start building apis in node with gql.

Setup this repo in your computer

```bash 
# Install dependecies  
$ npm install  

# Start the development server
$ npm run dev
$ 🚀 GraphQL server is running on port 5000

# .env is  pushed, It'll be included in the cloned files

```

You can also try query, just click [here](https://graphql-api-course-with-node.onrender.com/graphql?)

**Example 1**  : *Querying /  getting data*
```
 query {
  books {
    name
    id
  }
  author(id : 2){
    name 
    id
  }
}
```

**Example 2**  : *Mutating /  Modifying  data*

```
 mutation {
    addBook(name : "The wizard of Oz" , authorId : 2) {
        name
        authorId
        id
    }
 }
```
 
___

Jan 2023 - [@ndzhwr](https://twitter.com/ndzhwr)