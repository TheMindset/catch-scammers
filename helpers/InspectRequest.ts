import { ContactRequest } from '../types/csa/common'
import { INTERNE_RULES } from '../utils/constants'

export class InspectRequest {
  static inspectFullName (constact: ContactRequest): Array<string> {
    const status = []
    if (constact.firstname.length <= 2) status.push(INTERNE_RULES.RULE_FIRSTNAME_LENGTH)
    if (constact.lastname.length <= 2) status.push(INTERNE_RULES.RULE_LASTNAME_LENGTH)
    return status
  }
}
