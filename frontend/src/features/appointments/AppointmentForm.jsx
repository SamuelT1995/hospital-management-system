import { useEffect, useMemo, useState } from 'react';

export default function AppointmentForm({ patients, doctors, onSubmit }) {
  const defaultState = useMemo(
    () => ({
      patientId: patients[0]?._id || '',
      doctorId: doctors[0]?._id || '',
      appointmentDate: '',
      notes: ''
    }),
    [patients, doctors]
  );

  const [form, setForm] = useState(defaultState);

  useEffect(() => {
    setForm(defaultState);
  }, [defaultState]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(form);
    setForm(defaultState);
  };

  return (
    <form onSubmit={handleSubmit} className="grid">
      <select required value={form.patientId} onChange={(e) => setForm({ ...form, patientId: e.target.value })}>
        <option value="">Select patient</option>
        {patients.map((patient) => (
          <option key={patient._id} value={patient._id}>{patient.fullName}</option>
        ))}
      </select>
      <select required value={form.doctorId} onChange={(e) => setForm({ ...form, doctorId: e.target.value })}>
        <option value="">Select doctor</option>
        {doctors.map((doctor) => (
          <option key={doctor._id} value={doctor._id}>{doctor.fullName} - {doctor.specialty}</option>
        ))}
      </select>
      <input required type="datetime-local" value={form.appointmentDate} onChange={(e) => setForm({ ...form, appointmentDate: e.target.value })} />
      <textarea placeholder="Notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
      <button type="submit" disabled={!patients.length || !doctors.length}>Schedule Appointment</button>
    </form>
  );
}
