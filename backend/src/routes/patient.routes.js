import { Router } from 'express';
import { createPatient, listPatients } from '../controllers/patient.controller.js';

const router = Router();

router.route('/').get(listPatients).post(createPatient);

export default router;
