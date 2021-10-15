import invokeScript from '../services/script_service'

const triggerScriptController = {
  triggerScript: async (req, res) => {
    try {
      const data = await invokeScript()
      return res.status(200).send({
        data: {
          sellRequestCount: data.sellRequestCount,
          buyRequestCount: data.buyRequestCount
        },
        message: 'Script trigger Successfull.'
      })
    } catch (error) {
      return res.status(422).send({data: null, message: 'Unable to trigger script.'})
    }
  }
}

export default triggerScriptController
