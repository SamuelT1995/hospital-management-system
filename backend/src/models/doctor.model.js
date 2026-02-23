import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    specialty: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    availableSlots: [{ type: String }]
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
