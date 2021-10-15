/* eslint-disable babel/new-cap */
import path from 'path'
import swaggerUi from 'swagger-ui-express'
import express from 'express'
import YamlJS from 'yamljs'

const docsRouter = express.Router()

const docsPath = path.resolve(__dirname, '../../docs/spec.yaml')
const swaggerDocument = YamlJS.load(docsPath)

docsRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default docsRouter
