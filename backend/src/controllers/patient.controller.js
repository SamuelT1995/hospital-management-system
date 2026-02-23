import { Patient } from '../models/patient.model.js';
import { catchAsync } from '../utils/catchAsync.js';

export const listPatients = catchAsync(async (_req, res) => {
  const patients = await Patient.find().sort({ createdAt: -1 });
  res.json(patients);
});

export const createPatient = catchAsync(async (req, res) => {
  const patient = await Patient.create(req.body);
  res.status(201).json(patient);
});
