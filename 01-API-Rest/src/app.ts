import express from 'express'

import { dataSource } from './config/dataSource'
import bookmarkRoutes from './routes/bookmark.routes'


dataSource
  .initialize()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Failed to connect to database', err))


const app = express()
const port = 3000

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello, World!')
})


app.use("/bookmarks", bookmarkRoutes)


app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
