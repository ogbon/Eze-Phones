import formatGoogleSheetData from '../helpers/format_google_sheet'
import googleSheetData from '../helpers/google_sheet'
import SellRequest from '../models/sell_request'
import BuyRequest from '../models/buy_request'

const invokeScript = async () => {
  try {
    const data = await googleSheetData()
    const [sellRequestData, buyRequestData] = data
    const formatedSellRequestData = formatGoogleSheetData([...sellRequestData])
    const formatedBuyRequestData = formatGoogleSheetData([...buyRequestData])
    const sellData = formatedSellRequestData.map(element => ({
      ...element,
      price: Number(element.price.replace(/[^0-9]+/g, '')),
      storageSize: Number(element.storageSize.replace(/[^0-9]+/g, ''))
    }))
    const buyData = formatedBuyRequestData.map(element => ({
      ...element,
      price: Number(element.price.replace(/[^0-9]+/g, '')),
      storageSize: Number(element.storageSize.replace(/[^0-9]+/g, ''))
    }))
    let sellRequest = await SellRequest.find()
    let buyRequest = await BuyRequest.find()

    if ((sellRequest.length === 0) && (buyRequest.length === 0)) {
      sellRequest = await SellRequest.insertMany([...sellData])
      buyRequest = await BuyRequest.insertMany([...buyData])

    }
    const sellRequestCount = await SellRequest.find().countDocuments()
    const buyRequestCount = await BuyRequest.find().countDocuments()

    return {sellRequestCount, buyRequestCount}
  } catch (error) {
    return error
  }
}

export default invokeScript
