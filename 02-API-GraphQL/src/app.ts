import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    id: Int
    name: String
  }

  type Query {
    books: [Book]
  }
`

type Author = {
  id: number
  name: string
}

type Book = {
  title: string
  author: Author
}

const books: Book[] = [
  {
    title: "The Awakening",
    author: {
      id: 1,
      name: "toto"
    }
  },
  {
    title: "City of Glass",
    author: {
      id: 2,
      name: "tata"
    }
  },
  {
    title: "Hello, foo",
    author: {
      id: 3,
      name: "titi"
    }
  }
]

const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen({ port: 3010 }).then(({ url }) => console.log(`Magic happens at ${url}`))

