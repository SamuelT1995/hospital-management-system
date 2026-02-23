import { Appointment } from '../models/appointment.model.js';
import { Doctor } from '../models/doctor.model.js';
import { Patient } from '../models/patient.model.js';
import { catchAsync } from '../utils/catchAsync.js';

export const listAppointments = catchAsync(async (_req, res) => {
  const appointments = await Appointment.find()
    .populate('patientId', 'fullName phone')
    .populate('doctorId', 'fullName specialty')
    .sort({ appointmentDate: 1 });

  res.json(appointments);
});

export const createAppointment = catchAsync(async (req, res) => {
  const { patientId, doctorId } = req.body;

  const [patient, doctor] = await Promise.all([
    Patient.findById(patientId),
    Doctor.findById(doctorId)
  ]);

  if (!patient) {
    res.status(400);
    throw new Error('Invalid patientId. Patient not found.');
  }

  if (!doctor) {
    res.status(400);
    throw new Error('Invalid doctorId. Doctor not found.');
  }

  const appointment = await Appointment.create(req.body);
  const populated = await appointment.populate([
    { path: 'patientId', select: 'fullName phone' },
    { path: 'doctorId', select: 'fullName specialty' }
  ]);

  res.status(201).json(populated);
});
