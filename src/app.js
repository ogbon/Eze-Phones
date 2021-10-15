import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from './database/database'
import scriptTriggerRoute from './routes/script_trigger'
import requestTypeRoute from './routes/request_type'
import docsRouter from './routes/docs'

const app = express()

// Express application configuration
app.use(bodyParser.json({limit: '5mb'}))
app.use(cors())

app.use('/api', docsRouter)
app.use('/api', scriptTriggerRoute)
app.use('/api', requestTypeRoute)

// Setup catch-all API catch-all route
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to Eze-Phones API'
}))

export default app
