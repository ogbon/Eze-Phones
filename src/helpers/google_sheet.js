import {google} from 'googleapis'
import dotenv from 'dotenv'
dotenv.config()

const googleSheetData = async () => {
  const auth = new google.auth.GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/spreadsheets'
  })

  const client = await auth.getClient()

  const googleSheets = google.sheets({version: 'v4', auth: client})

  const spreadsheetId = process.env.SPREAD_SHEET_ID

  const getRows = await googleSheets.spreadsheets.values.batchGet({
    auth,
    spreadsheetId,
    ranges: ['IPHONES!A:J', 'IPHONES!L:U']
  })

  return [getRows.data.valueRanges[0].values, getRows.data.valueRanges[1].values]
}

export default googleSheetData
