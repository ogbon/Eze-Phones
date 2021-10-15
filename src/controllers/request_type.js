import SellRequest from '../models/sell_request'
import BuyRequest from '../models/buy_request'

const requestTypeController = {
  fetchRequest: async (req, res) => {
    const {price, condition, storageSize, phone, page} = req.query
    const currentPage = page || 1
    const perPage = 10
    let count
    let requestData
    const requestType = req.params.requestType
    const query = {}

    if (price)
      query.price = price

    if (condition)
      query.condition = condition

    if (storageSize)
      query.storageSize = storageSize

    if (phone)
      query.phone = phone

    try {
      if (requestType === 'SellRequest') {
        count = await SellRequest.find({
          ...query
        }).countDocuments()
        requestData = await SellRequest.find({
          ...query
        })
          .skip((currentPage - 1) * perPage)
          .limit(perPage)
          .lean()
      }
      if (requestType === 'BuyRequest') {
        count = await BuyRequest.find({
          ...query
        }).countDocuments()
        requestData = await BuyRequest.find({
          ...query
        })
          .skip((currentPage - 1) * perPage)
          .limit(perPage)
          .lean()
      }
      const data = requestData.map(element => ({
        ...element,
        price: '$' + element.price,
        storageSize: element.storageSize + 'GB'
      }))
      return res.status(200).send({
        data: data,
        totalItems: count,
        pages: Math.ceil(count / perPage),
        message: 'Successfully fetch request type'
      })
    } catch (error) {
      return res.status(422).send({data: null, message: 'Unable to fetch request type'})
    }
  }
}

export default requestTypeController
