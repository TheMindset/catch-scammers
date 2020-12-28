import { Router } from 'express'
import { getAdsStatusController } from '../controller/getAdsStatus_controller'
const router = Router()

router.get('/getAdsStatus', getAdsStatusController.getAdsStatus)


export const getAdsStatusRouter = router
