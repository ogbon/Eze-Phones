import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('-'.repeat(80))
  console.log(`Eze-Phones API is currently running on port:${PORT}`)
  console.log('-'.repeat(80))
})
