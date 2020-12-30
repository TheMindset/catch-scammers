import { AdDetailsRequest } from '../../../types/csa/common'
import { GetAdsStatusResult } from '../../../types/csa/getStatusAdsResult'
import { InspectRequest } from '../../../helpers/InspectRequest'

export const checkAdsStatus = async (req: AdDetailsRequest): Promise<GetAdsStatusResult> => {
  const status = InspectRequest.inspectContacts(req.contacts)

  return {
    reference: req.reference,
    scam: status.length > 0,
    rules: status
  }
}
