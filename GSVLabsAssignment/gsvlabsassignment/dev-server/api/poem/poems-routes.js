import express from 'express';
const router = express.Router();
import * as controller from './poems-controller';
import * as auth from '../../services/auth-service';

router.post('/poem', auth.requireLogin, controller.create);
router.get('/poem', auth.requireLogin, controller.index);
router.get('/poem/:id', auth.requireLogin, controller.show);
router.put('/poem', auth.requireLogin, controller.update);
router.delete('/poem/:id', auth.requireLogin, controller.remove);

export default router;