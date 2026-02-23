import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 0 },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    medicalHistory: { type: String, default: '' }
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
