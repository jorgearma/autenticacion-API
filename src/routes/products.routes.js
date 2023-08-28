import express from 'express';
import * as producsCtrl from '../controllers/products.controller'; // Importar todas las funciones del controlador
import {verifytoken,ismoderator ,isadmin} from "../middlewares/authjwt";
const router = express.Router();

router.post('/',[verifytoken,ismoderator], producsCtrl.createProduct);

router.get('/', producsCtrl.getProducs);

router.get('/:producId', producsCtrl.getProducById);

router.put('/:producId',[verifytoken, isadmin], producsCtrl.updateProducByid);

router.delete('/:productId',[verifytoken, isadmin], producsCtrl.deletePraducById);


export default router;
