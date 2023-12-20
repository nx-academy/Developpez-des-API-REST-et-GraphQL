import { createServer } from 'node:http'
import { createYoga, createSchema } from 'graphql-yoga'

const schema = createSchema({
  typeDefs:`
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world'
    }
  }
})

const yoga = createYoga({ schema })

const server = createServer(yoga)

server.listen(3010, () => {
  console.log(`Maggic happens at localhost:3010`)
})
