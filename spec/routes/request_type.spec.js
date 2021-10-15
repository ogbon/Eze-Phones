import { expect } from 'chai'
import app from '../../src/app'
import request from 'supertest'
import  { clearDatabase }  from '../../src/helpers/test_database'

describe('request_type', () => {
  before( async () => {
    await clearDatabase();
  })

  const sellRequest = {
    storageSize: "64GB",
    phone: "iPhone XS Max",
    condition: "New",
    price: "$560"
  }

  const buyRequest = {
    storageSize: "64GB",
    phone: "iPhone XS Max",
    condition: "New",
    price: "$1160",
  }
  
  describe('/GET call script', () => {
    context('invoke script', () => {
      it('return SellRequest and BuyRequest count', async () => {
        const res = await request(app)
        .get('/api/trigger-script')
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('object')
        expect(res.body.data.sellRequestCount).to.equal(304)
        expect(res.body.data.buyRequestCount).to.equal(304)
      })
    })
  })

  describe('/GET SellRequest', () => {
    context('SellRequest without query params', () => {
      it('return SellRequest data', async () => {
        const res = await request(app)
        .get('/api/SellRequest')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal(sellRequest.storageSize)
        expect(res.body.data[0].phone).to.equal(sellRequest.phone)
        expect(res.body.data[0].condition).to.equal(sellRequest.condition)
        expect(res.body.data[0].price).to.equal(sellRequest.price)
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('SellRequest with page query param', () => {
      it('return SellRequest data that match page value', async () => {
        const res = await request(app)
        .get('/api/SellRequest?page=2')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("256GB")
        expect(res.body.data[0].phone).to.equal("iPhone XS Max")
        expect(res.body.data[0].condition).to.equal("A2")
        expect(res.body.data[0].price).to.equal("$570")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('SellRequest with price query param', () => {
      it('return SellRequest data that match price value', async () => {
        const res = await request(app)
        .get('/api/SellRequest?price=45')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("16GB")
        expect(res.body.data[0].phone).to.equal("iPhone 6 Plus")
        expect(res.body.data[0].condition).to.equal("B1")
        expect(res.body.data[0].price).to.equal("$45")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('SellRequest with condition query param', () => {
      it('return SellRequest data that match condition value', async () => {
        const res = await request(app)
        .get('/api/SellRequest?condition=C')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("64GB")
        expect(res.body.data[0].phone).to.equal("iPhone XS Max")
        expect(res.body.data[0].condition).to.equal("C")
        expect(res.body.data[0].price).to.equal("$535")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('SellRequest with storageSize query param', () => {
      it('return SellRequest data that match storageSize value', async () => {
        const res = await request(app)
        .get('/api/SellRequest?storageSize=64')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("64GB")
        expect(res.body.data[0].phone).to.equal("iPhone XS Max")
        expect(res.body.data[0].condition).to.equal("New")
        expect(res.body.data[0].price).to.equal("$560")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('SellRequest with phone query param', () => {
      it('return SellRequest data that match phone value', async () => {
        const res = await request(app)
        .get('/api/SellRequest?phone=iPhone 6 Plus')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("16GB")
        expect(res.body.data[0].phone).to.equal("iPhone 6 Plus")
        expect(res.body.data[0].condition).to.equal("New")
        expect(res.body.data[0].price).to.equal("$60")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('SellRequest with phone, storageSize and condition query params', () => {
      it('return SellRequest data that match phone, storageSize and condition values', async () => {
        const res = await request(app)
        .get('/api/SellRequest?phone=iPhone XS Max&storageSize=256&condition=A2')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("256GB")
        expect(res.body.data[0].phone).to.equal("iPhone XS Max")
        expect(res.body.data[0].condition).to.equal("A2")
        expect(res.body.data[0].price).to.equal("$570")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('SellRequest with phone and condition query params', () => {
      it('return SellRequest data that match phone and condition values', async () => {
        const res = await request(app)
        .get('/api/SellRequest?phone=iPhone XS Max&condition=B2')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("64GB")
        expect(res.body.data[0].phone).to.equal("iPhone XS Max")
        expect(res.body.data[0].condition).to.equal("B2")
        expect(res.body.data[0].price).to.equal("$540")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    
  })
  
  describe('/GET BuyRequest', () => {
    context('Fetch BuyRequest', () => {
      it('return BuyRequest data', async () => {
        const res = await request(app)
        .get('/api/BuyRequest')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal(buyRequest.storageSize)
        expect(res.body.data[0].phone).to.equal(buyRequest.phone)
        expect(res.body.data[0].condition).to.equal(buyRequest.condition)
        expect(res.body.data[0].price).to.equal(buyRequest.price)
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('BuyRequest with page query param', () => {
      it('return BuyRequest data that match page value', async () => {
        const res = await request(app)
        .get('/api/BuyRequest?page=2')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("256GB")
        expect(res.body.data[0].phone).to.equal("iPhone XS Max")
        expect(res.body.data[0].condition).to.equal("A2")
        expect(res.body.data[0].price).to.equal("$1170")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('BuyRequest with price query param', () => {
      it('return BuyRequest data that match price value', async () => {
        const res = await request(app)
        .get('/api/BuyRequest?price=1150')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("64GB")
        expect(res.body.data[0].phone).to.equal("iPhone XS Max")
        expect(res.body.data[0].condition).to.equal("A2")
        expect(res.body.data[0].price).to.equal("$1150")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('BuyRequest with condition query param', () => {
      it('return BuyRequest data that match condition value', async () => {
        const res = await request(app)
        .get('/api/BuyRequest?condition=C')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("64GB")
        expect(res.body.data[0].phone).to.equal("iPhone XS Max")
        expect(res.body.data[0].condition).to.equal("C")
        expect(res.body.data[0].price).to.equal("$1135")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('BuyRequest with storageSize query param', () => {
      it('return BuyRequest data that match storageSize value', async () => {
        const res = await request(app)
        .get('/api/BuyRequest?storageSize=64')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("64GB")
        expect(res.body.data[0].phone).to.equal("iPhone XS Max")
        expect(res.body.data[0].condition).to.equal("New")
        expect(res.body.data[0].price).to.equal("$1160")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('BuyRequest with phone query param', () => {
      it('return BuyRequest data that match phone value', async () => {
        const res = await request(app)
        .get('/api/BuyRequest?phone=iPhone 6 Plus')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("16GB")
        expect(res.body.data[0].phone).to.equal("iPhone 6 Plus")
        expect(res.body.data[0].condition).to.equal("New")
        expect(res.body.data[0].price).to.equal("$160")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('BuyRequest with phone, storageSize and condition query params', () => {
      it('return BuyRequest data that match phone, storageSize and condition values', async () => {
        const res = await request(app)
        .get('/api/BuyRequest?phone=iPhone XS Max&storageSize=256&condition=A2')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("256GB")
        expect(res.body.data[0].phone).to.equal("iPhone XS Max")
        expect(res.body.data[0].condition).to.equal("A2")
        expect(res.body.data[0].price).to.equal("$1170")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
    context('BuyRequest with phone and condition query params', () => {
      it('return BuyRequest data that match phone and condition values', async () => {
        const res = await request(app)
        .get('/api/BuyRequest?phone=iPhone XS Max&&condition=B2')
        expect(res.status).to.equal(200)
        expect(res.body.data[0].storageSize).to.equal("64GB")
        expect(res.body.data[0].phone).to.equal("iPhone XS Max")
        expect(res.body.data[0].condition).to.equal("B2")
        expect(res.body.data[0].price).to.equal("$1140")
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('array')
      })
    })
  })
})
