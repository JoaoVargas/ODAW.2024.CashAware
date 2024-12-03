import { Router } from 'express';
import * as tagController from '../controllers/tag_controller.js';

const router = Router();

router.route('/tags')
  .get(tagController.getTags)
  .post(tagController.createTag)

router.route('/tags/:id')
  .get(tagController.getTag)
  .put(tagController.updateTag)
  .delete(tagController.deleteTag)

export default router;
