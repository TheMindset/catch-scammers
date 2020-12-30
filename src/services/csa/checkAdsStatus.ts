import { AdDetailsRequest } from '../../../types/csa/common'
import { GetAdsStatusResult } from '../../../types/csa/getStatusAdsResult'
import { InspectRequest } from '../../../helpers/InspectRequest'
import { quotationService } from '../quotation/quotationService'
import { inRange } from "../../../helpers/inRange";
import { QUOTATION_SERVICE_RULE, WHITELISTREGISTERNUMBER, BLACKLIST_SERVICE_RULE } from '../../../utils/csa/constants'


export const checkAdsStatus = async (req: AdDetailsRequest): Promise<GetAdsStatusResult> => {
  let status: Array<string> = []
  status = InspectRequest.inspectContacts(req.contacts)

  const quotation = await quotationService(req.vehicle)
  if (!inRange(req.price, quotation)) status.push(QUOTATION_SERVICE_RULE.RULE_PRICE_QUOTATION_RATE)

  if (req.vehicle.registerNumber !== WHITELISTREGISTERNUMBER ) status.push(BLACKLIST_SERVICE_RULE.RULE_REGISTERNUMBER_BLACKLIST)

  return {
    reference: req.reference,
    scam: status.length > 0,
    rules: status
  }
}
