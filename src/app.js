import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from './database/database'

const app = express()

// Express application configuration
app.use(bodyParser.json({limit: '5mb'}))
app.use(cors())

// Setup catch-all API catch-all route
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to Eze-Phones API'
}))

export default app
