/* eslint-disable babel/new-cap */
import Router from 'express'
import requestTypeController from '../controllers/request_type'

const requestTypeRouter = Router()

requestTypeRouter.route('/:requestType').get(requestTypeController.fetchRequest)

export default requestTypeRouter
