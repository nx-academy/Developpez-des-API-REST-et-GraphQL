import express, { Request, Response } from 'express'
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


app.get('/bookmarks', (req: Request, res: Response) => {
  console.log('Get all bookmarks')

  res.json({
    data: 'Get all bookmarks'
  })
})

app.get('/bookmarks/:id', (req: Request, res: Response) => {
  console.log('Get one bookmark')

  res.json({
    data: 'Get one bookmark'
  })
})

app.post('/bookmarks', (req: Request, res: Response) => {
  console.log('Create one bookmark')

  res.json({
    data: 'Create one bookmark'
  })
})

app.put('/bookmarks', (req: Request, res: Response) => {
  console.log('Update one bookmark')

  res.json({
    data: 'Update one bookmark'
  })
})

app.delete('/bookmarks', (req: Request, res: Response) => {
  console.log('Delete one bookmark')

  res.json({
    data: 'Delete one bookmark'
  })
})


app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
