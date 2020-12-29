import { NextFunction, Request, Response } from 'express'
import { checkAdsStatus } from '../services/csa/checkAdsStatus'

const getAdsStatus = async (req: Request, res: Response, next: NextFunction): Promise<void | Response<string> | Record<string, unknown>> => {

  try {
    const result = await checkAdsStatus(req.body)
    res.send(result)
  } catch (err) {
    next(err)
  }
}

export const getAdsStatusController = {
  getAdsStatus,
}
