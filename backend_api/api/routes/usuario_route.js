import { Router } from 'express';
import * as userController from '../controllers/usuario_controller.js';

const router = Router();

router.route('/users')
  .get(userController.getUsuarios)
  .post(userController.createUsuario)

router.route('/users/:id')
  .get(userController.getUsuario)
  .put(userController.updateUsuario)
  .delete(userController.deleteUsuario)

export default router;
