import { useState } from 'react';

const initialState = {
  fullName: '',
  age: '',
  gender: 'Male',
  phone: '',
  address: '',
  medicalHistory: ''
};

export default function PatientForm({ onSubmit }) {
  const [form, setForm] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit({ ...form, age: Number(form.age) });
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="grid">
      <input required placeholder="Full name" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
      <input required type="number" min="0" placeholder="Age" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
      <select value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })}>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <input required placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <input required placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <textarea placeholder="Medical history" value={form.medicalHistory} onChange={(e) => setForm({ ...form, medicalHistory: e.target.value })} />
      <button type="submit">Add Patient</button>
    </form>
  );
}
