import { NextFunction, Request, Response } from 'express'
import { checkAdsStatus } from '../services/csam/checkAdsStatus'

const getAdsStatus = async (req: Request, res: Response, next: NextFunction): Promise<void | Response<string> | Record<string, unknown>> => {
  try {
    res.send(await checkAdsStatus())
  } catch (err) {
    next(err)
  }
}

export const getAdsStatusController = {
  getAdsStatus,
}
