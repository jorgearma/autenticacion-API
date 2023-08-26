import express from 'express';
import * as producsCtrl from '../controllers/products.controller'; // Importar todas las funciones del controlador

const router = express.Router();

router.post('/', producsCtrl.createProduct);
router.get('/', producsCtrl.getProducs);
router.get('/:producId', producsCtrl.getProducById);
router.put('/:producId', producsCtrl.updateProducByid);
router.delete('/:productId', producsCtrl.deletePraducById);

export default router;
