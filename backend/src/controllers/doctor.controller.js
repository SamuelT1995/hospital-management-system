import { Doctor } from '../models/doctor.model.js';
import { catchAsync } from '../utils/catchAsync.js';

export const listDoctors = catchAsync(async (_req, res) => {
  const doctors = await Doctor.find().sort({ createdAt: -1 });
  res.json(doctors);
});

export const createDoctor = catchAsync(async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json(doctor);
});
