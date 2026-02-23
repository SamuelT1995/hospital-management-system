import { Router } from 'express';
import { createAppointment, listAppointments } from '../controllers/appointment.controller.js';

const router = Router();

router.route('/').get(listAppointments).post(createAppointment);

export default router;
