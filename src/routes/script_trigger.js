/* eslint-disable babel/new-cap */
import Router from 'express'
import triggerScriptController from '../controllers/script_trigger'

const scriptTriggerRouter = Router()

scriptTriggerRouter.route('/trigger-script').get(triggerScriptController.triggerScript)

export default scriptTriggerRouter
