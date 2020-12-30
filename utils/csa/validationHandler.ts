import {body, validationResult} from 'express-validator'
import { Request, Response, NextFunction } from 'express'

export const validationHandler = (req: Request, res: Response, next: NextFunction): Response<string> => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    next()
  } catch (e) {
    return res.status(400).json({ errors: [e] })
  }
}

export const adValidator = [
  body('contacts.firstname').isString(),
  body('contacts.lastname').isString(),
  body('contacts.email').isString(),
  body('contacts.phone1.value').isString(),
  body('creationDate').isString(),
  body('price').isInt(),
  body('publicationOptions').isArray(),
  body('reference').isString(),
  body('vehicle.make').isString(),
  body('vehicle.model').isString(),
  body('vehicle.version').isString(),
  body('vehicle.category').isString(),
  body('vehicle.registerNumber').isString(),
  body('vehicle.mileage').isInt()

]

