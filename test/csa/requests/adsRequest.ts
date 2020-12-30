import { AdDetailsRequest } from '../../../types/csa/common'


export const adsRequestHappyRequest = {
  "contacts": {
    "firstname": "Christophe",
    "lastname": "Dupont",
    "email": "testdepot@yopmail.fr",
    "phone1": {
      "value": "0607080901"
    }
  },
  "creationDate": "2020-01-09T09:02:22.610Z",
  "price": 19000,
  "publicationOptions": ["STRENGTHS", "BOOST_VO"],
  "reference": "B300053623",
  "vehicle": {
    "make": "HONDA",
    "model": "CR-V",
    "version": "IV (2) 1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT",
    "category": "SUV_4X4_CROSSOVER",
    "registerNumber": "AA123AA",
    "mileage": 100000
  }
}

export const adsRequestWrongFullName: AdDetailsRequest = {
  "contacts": {
    "firstname": "Ch",
    "lastname": "D",
    "email": "testdepot@yopmail.fr",
    "phone1": {
      "value": "0607080901"
    }
  },
  "creationDate": "2020-01-09T09:02:22.610Z",
  "price": 19000,
  "publicationOptions": ["STRENGTHS", "BOOST_VO"],
  "reference": "B300053623",
  "vehicle": {
    "make": "HONDA",
    "model": "CR-V",
    "version": "IV (2) 1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT",
    "category": "SUV_4X4_CROSSOVER",
    "registerNumber": "AA123AA",
    "mileage": 100000
  }
}


export const adsRequestWrongEmail: AdDetailsRequest = {
  "contacts": {
    "firstname": "Christophe",
    "lastname": "Dupont",
    "email": "test_&_*!*$âéééédepot@yopmail123456.fr",
    "phone1": {
      "value": "0607080901"
    }
  },
  "creationDate": "2020-01-09T09:02:22.610Z",
  "price": 19000,
  "publicationOptions": ["STRENGTHS", "BOOST_VO"],
  "reference": "B300053623",
  "vehicle": {
    "make": "HONDA",
    "model": "CR-V",
    "version": "IV (2) 1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT",
    "category": "SUV_4X4_CROSSOVER",
    "registerNumber": "AA123AA",
    "mileage": 100000
  }
}
