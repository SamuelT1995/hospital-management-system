import { Router } from 'express';
import appointmentRoutes from './appointment.routes.js';
import doctorRoutes from './doctor.routes.js';
import patientRoutes from './patient.routes.js';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Hospital Management API is running' });
});

router.use('/patients', patientRoutes);
router.use('/doctors', doctorRoutes);
router.use('/appointments', appointmentRoutes);

export default router;
