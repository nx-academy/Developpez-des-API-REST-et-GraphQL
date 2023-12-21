import { makeSchema } from 'nexus'
import { join } from 'path'

import { Book } from "./graphql"

export const schema = makeSchema({
  types: {
    Book
  },
  outputs: {
    schema: join(process.cwd(), "schema.graphql"),
    typegen: join(process.cwd(), "nexus-typegen.ts")
  }
})


