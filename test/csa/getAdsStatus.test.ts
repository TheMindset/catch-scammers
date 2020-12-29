import app from "../../src/app"
import chai = require("chai")
import { adsBadRequest } from './requests/adsRequest'
import chaiHttp = require("chai-http")

chai.use(chaiHttp)

const expect = chai.expect

describe('/GET /getAdsStatus', () => {
  it('it should empty values', async () => {
    const res = await chai.request(app.listen())
      .get('/getAdsStatus')
      .send(adsBadRequest)

    expect(res.status).to.deep.equals(200)

    expect(res.body.reference).to.deep.equals(adsBadRequest.reference)
    expect(res.body.scam).to.deep.equals(true)
    expect(res.body.rules).to.be.an('array')
    expect(res.body.rules).to.include('rule::firstname::length')

  })
})
