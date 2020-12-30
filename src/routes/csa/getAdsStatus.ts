import { Router } from 'express'
import { getAdsStatusController } from '../../controller/getAdsStatus_controller'
import {validationHandler, adValidator } from '../../../utils/csa/validationHandler'
const router = Router()

router.get('/getAdsStatus',[...adValidator, validationHandler], getAdsStatusController.getAdsStatus)


export const getAdsStatusRouter = router
