import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import index from './routes'

dotenv.config()
const app = express()
const { PORT, LOCALDB, CORS } = process.env

mongoose
  .connect(`${LOCALDB}`)
  .then(() => {
    console.log(`Connected to Mongo on ${LOCALDB}`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err)
  })

app.use(cors({ allowedHeaders: '*' }))
app.use(express.json())
app.use('/', index)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
