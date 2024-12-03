import { Router } from 'express';
import * as gastoController from '../controllers/gasto_controller.js';

const router = Router();

router.route('/gastos')
  .get(gastoController.getGastos)
  .post(gastoController.createGasto)

router.route('/gastos/:id')
  .get(gastoController.getGasto)
  .put(gastoController.updateGasto)
  .delete(gastoController.deleteGasto)

router.route('/gastos/:idUser')
  .get(gastoController.gastosPorUsuario)

export default router;