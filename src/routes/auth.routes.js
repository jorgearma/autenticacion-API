import express from 'express'

import * as aouthCtrl from '../controllers/auth.controller'

const router = express.Router()

router.post('/singup',aouthCtrl.singup)
router.post('/singin' ,aouthCtrl.singin)

export default router;