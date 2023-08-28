import {Router} from 'express'
const router = Router()

import * as userCtrl from "../controllers/user.controlers";
import  * as auth  from "../middlewares/authjwt";
import  * as check  from "../middlewares/verifysing";

router.post('/',[
    auth.verifytoken,
    auth.isadmin,
    check.checkroleexist
    
], userCtrl.createuser)

export default router;