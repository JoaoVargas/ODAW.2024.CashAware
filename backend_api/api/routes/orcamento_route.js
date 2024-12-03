import { Router } from 'express';
import * as orcamentoController from '../controllers/orcamento_controller.js';

const router = Router();

router.route('/users')
  .get(orcamentoController.getOrcamentos)
  .post(orcamentoController.createOrcamento)

router.route('/users/:id')
  .get(orcamentoController.getOrcamento)
  .put(orcamentoController.updateOrcamento)
  .delete(orcamentoController.deleteOrcamento)

export default router;
