export type ContactRequest = {
  firstname: string
  lastname: string
  email: string
  phone1: {
    value: string
  }
}

type VehiculeRequest = {
  make: string
  model: string
  version: string
  category: string
  registerNumber: string
  mileage: number
}

export type AdDetailsRequest = {
  contacts: ContactRequest
  creationDate: string
  price: number
  publicationOptions: string[]
  reference: string
  vehicle: VehiculeRequest

}
