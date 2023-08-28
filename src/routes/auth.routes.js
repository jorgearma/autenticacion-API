import express from 'express'

import * as aouthCtrl from '../controllers/auth.controller'

const router = express.Router()

import * as verefy from "../middlewares/verifysing";

router.post('/singup', [verefy.checkduplics, verefy.checkroleexist] , aouthCtrl.singup)
router.post('/singin' ,aouthCtrl.singin)

export default router;