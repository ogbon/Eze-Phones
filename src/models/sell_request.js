import mongoose from 'mongoose'
import {Schema} from 'mongoose'

const sellRequestSchema = new Schema({
  storageSize: {
    type: Number
  },
  phone: {
    type: String
  },
  condition: {
    type: String
  },
  price: {
    type: Number
  },
  lockStatus: {
    type: String
  }
})

export default mongoose.model('SellRequest', sellRequestSchema)
