import mongoose from 'mongoose'
import {dbconn} from './config'

mongoose.Promise = global.Promise

mongoose.connect(dbconn(), {useNewUrlParser: true})

export default mongoose
