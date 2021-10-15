import dotenv from 'dotenv'

dotenv.config()

const env = process.env.NODE_ENV || 'development'

export const dbconn = () => {

  if (env === 'test')
    return process.env.TEST_MONGODB_URI
  return  process.env.MONGODB_URI

}
