import { AdDetailsRequest } from '../../../types/csa/common'
import { GetAdsStatusResult } from '../../../types/csa/getStatusAdsResult'
import { InspectRequest } from '../../../helpers/InspectRequest'

export const checkAdsStatus = async (req: AdDetailsRequest): Promise<GetAdsStatusResult> => {
  const fullNameStatus = InspectRequest.inspectFullName(req.contacts)

  return {
    reference: req.reference,
    scam: fullNameStatus.length > 0,
    rules: fullNameStatus
  }
}
