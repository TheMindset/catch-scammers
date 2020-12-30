import { ContactRequest } from '../types/csa/common'
import { INTERNE_RULES } from '../utils/csa/constants'

export class InspectRequest {
  static inspectContacts (contacts: ContactRequest): Array<string> {
    const status: Array<string> = []

    if (contacts.firstname.length <= 2) status.push(INTERNE_RULES.RULE_FIRSTNAME_LENGTH)
    if (contacts.lastname.length <= 2) status.push(INTERNE_RULES.RULE_LASTNAME_LENGTH)

    const beforeAT = contacts.email.substr(0, contacts.email.indexOf('@'))
    const afterAT = contacts.email.substr(contacts.email.indexOf('@') + 1)

    const alphaNum = beforeAT.replace(/[^a-z0-9]/gi,'')
    const onlyNum = afterAT.replace(/[^0-9]/g, '')

    if (((alphaNum.length * 100 / beforeAT.length) < 70)) status.push(INTERNE_RULES.RULE_ALPHA_RATE)
    if (0 !== onlyNum.length && ((onlyNum.length * 100 / afterAT.length) > 30)) status.push(INTERNE_RULES.RULE_NUMBER_RATE)

    return status
  }
}
