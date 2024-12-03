import { Router } from 'express';
import * as authController from '../controllers/auth_controller.js';

const router = Router();

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

export default router;
