import express from 'express'
import { myDataSource } from './app-data-source'


myDataSource
  .initialize()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Failed to connect to database', err))


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
