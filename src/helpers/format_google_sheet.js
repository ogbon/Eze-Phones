const formatGoogleSheetData = (data) => {
  const googleSheet = data
  const formatedGoogleSheetDataObjects = []

  let phone = ''
  let lockStatus = ''

  const columnMap = {
    0: 'New',
    1: 'A1',
    2: 'A2',
    3: 'B1',
    4: 'B2',
    5: 'C',
    6: 'C/B',
    7: 'C/D'
  }


  for (const item of googleSheet) {
    if (!item.length) continue
    if (item.length === 1) {
      if (item[0] !== ('Buy Request' || 'Sell Request')) {
        phone = item[0] ? item[0] : phone
        continue
      }
    }
    if (item.length === 10) {
      if (item[1] === 'Storage Size') continue

      const formatedGoogleSheetDataObject = {'phone': phone}
      lockStatus = item[0] ? item[0] : lockStatus
      formatedGoogleSheetDataObject['lockStatus'] = lockStatus
      formatedGoogleSheetDataObject['storageSize'] = item[1]

      const slicedItem = item.slice(2)
      slicedItem.forEach((element, i) => {
        formatedGoogleSheetDataObject['condition'] = columnMap[i]
        formatedGoogleSheetDataObject['price'] = element
        formatedGoogleSheetDataObjects.push({...formatedGoogleSheetDataObject})
      })
    }

  }
  return formatedGoogleSheetDataObjects
}

export default formatGoogleSheetData
