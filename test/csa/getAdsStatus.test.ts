import app from "../../src/app"
import chai = require("chai")
import {
  adsRequestHappyRequest,
  adsRequestWrongEmail,
  adsRequestWrongFullName,
  adsRequestWrongPrice,
  adsRequestWrongRegisterNumber,
  adsRequestMissedInputs
} from './requests/adsRequest'
import chaiHttp = require("chai-http")

chai.use(chaiHttp)

const expect = chai.expect

describe('/GET getAdsStatus', () => {
  it('it should not detect any error', async () => {
    const res = await chai.request(app.listen())
      .get('/getAdsStatus')
      .send(adsRequestHappyRequest)

    expect(res.status).to.deep.equals(200)
    expect(res.body.reference).to.deep.equals(adsRequestHappyRequest.reference)
    expect(res.body.scam).to.deep.equals(false)
    expect(res.body.rules).to.be.an('array')
    expect(res.body.rules).to.be.empty
  })

  it('it should detect error on the fullName', async () => {
    const res = await chai.request(app.listen())
      .get('/getAdsStatus')
      .send(adsRequestWrongFullName)

    expect(res.status).to.deep.equals(200)

    expect(res.body.reference).to.deep.equals(adsRequestWrongFullName.reference)
    expect(res.body.scam).to.deep.equals(true)
    expect(res.body.rules).to.be.an('array')
    expect(res.body.rules).to.include('rule::firstname::length')
    expect(res.body.rules).to.include('rule::lastname::length')
  })

  it('it should detect error on the email', async () => {
    const res = await chai.request(app.listen())
      .get('/getAdsStatus')
      .send(adsRequestWrongEmail)

    expect(res.status).to.deep.equals(200)

    expect(res.body.reference).to.deep.equals(adsRequestWrongEmail.reference)
    expect(res.body.scam).to.deep.equals(true)
    expect(res.body.rules).to.be.an('array')
    expect(res.body.rules).to.include('rule::alpha_rate')
    expect(res.body.rules).to.include('rule::number_rate')
  })

  it('it should detect error on the price', async () => {
    const res = await chai.request(app.listen())
      .get('/getAdsStatus')
      .send(adsRequestWrongPrice)

    expect(res.status).to.deep.equals(200)

    expect(res.body.reference).to.deep.equals(adsRequestWrongPrice.reference)
    expect(res.body.scam).to.deep.equals(true)
    expect(res.body.rules).to.be.an('array')
    expect(res.body.rules).to.include('rule::price:quotation_rate')
  })

  it('it should detect error on the register number', async () => {
    const res = await chai.request(app.listen())
      .get('/getAdsStatus')
      .send(adsRequestWrongRegisterNumber)

    expect(res.status).to.deep.equals(200)

    expect(res.body.reference).to.deep.equals(adsRequestWrongRegisterNumber.reference)
    expect(res.body.scam).to.deep.equals(true)
    expect(res.body.rules).to.be.an('array')
    expect(res.body.rules).to.include('rule::registernumber::blacklist')
  })


  it('it should return an error due to inputs missing', async () => {
    const res = await chai.request(app.listen())
      .get('/getAdsStatus')
      .send(adsRequestMissedInputs)

    expect(res.status).to.deep.equals(400)

    expect(res.body.errors[0]).to.be.an('object')
    expect(res.body.errors[0].param).to.deep.equals('creationDate')
    expect(res.body.errors[1].param).to.deep.equals('vehicle.model')  })
})

