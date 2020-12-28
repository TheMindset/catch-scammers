import app from "../../src/app"
import chai = require("chai")
import chaiHttp = require("chai-http")

chai.use(chaiHttp)

const expect = chai.expect

describe('/GET /getAdsStatus', () => {
  it('it should empty values', async () => {
    const res = await chai.request(app.listen()).get('/getAdsStatus')

    expect(res.status).to.deep.equals(200)

    expect(res.body.reference).to.deep.equals('...')
    expect(res.body.scam).to.deep.equals('...')
    expect(res.body.rules).to.deep.equals('...')
  })
})
