import { VehiculeRequest } from '../../../types/csa/common'
import { delay } from '../../../helpers/delay'

export const quotationService =  async (vehicle: VehiculeRequest): Promise<number> => {
  // use the vehicle object for avoid lint
  vehicle.version

  await delay(50)

  return 35000
}
