import { Router } from 'express';
import { createDoctor, listDoctors } from '../controllers/doctor.controller.js';

const router = Router();

router.route('/').get(listDoctors).post(createDoctor);

export default router;
