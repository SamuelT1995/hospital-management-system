import { useState } from 'react';

const initialState = {
  fullName: '',
  specialty: '',
  phone: '',
  availableSlots: ''
};

export default function DoctorForm({ onSubmit }) {
  const [form, setForm] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit({
      ...form,
      availableSlots: form.availableSlots.split(',').map((slot) => slot.trim()).filter(Boolean)
    });
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="grid">
      <input required placeholder="Doctor name" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
      <input required placeholder="Specialty" value={form.specialty} onChange={(e) => setForm({ ...form, specialty: e.target.value })} />
      <input required placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <input placeholder="Available slots (comma-separated)" value={form.availableSlots} onChange={(e) => setForm({ ...form, availableSlots: e.target.value })} />
      <button type="submit">Add Doctor</button>
    </form>
  );
}
