import { expect } from 'chai'
import app from '../../src/app'
import request from 'supertest'
import  { clearDatabase, closeDatabase }  from '../../src/helpers/test_database'

describe('script_trigger', () => {
  before( async () => {
    await clearDatabase();
  })
  after(async () => {
    await closeDatabase()
  });
  
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
})
