import { useEffect, useState } from 'react';
import SectionCard from '../components/common/SectionCard';
import AppointmentForm from '../features/appointments/AppointmentForm';
import DoctorForm from '../features/doctors/DoctorForm';
import PatientForm from '../features/patients/PatientForm';
import { hmsApi } from '../services/hmsApi';

export default function DashboardPage() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  const loadData = async () => {
    try {
      const [patientsRes, doctorsRes, appointmentsRes] = await Promise.all([
        hmsApi.getPatients(),
        hmsApi.getDoctors(),
        hmsApi.getAppointments()
      ]);

      setPatients(patientsRes.data);
      setDoctors(doctorsRes.data);
      setAppointments(appointmentsRes.data);
      setError('');
    } catch (loadError) {
      setError(loadError?.response?.data?.message || 'Failed to fetch dashboard data.');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const createPatient = async (payload) => {
    await hmsApi.createPatient(payload);
    await loadData();
  };

  const createDoctor = async (payload) => {
    await hmsApi.createDoctor(payload);
    await loadData();
  };

  const createAppointment = async (payload) => {
    await hmsApi.createAppointment(payload);
    await loadData();
  };

  return (
    <main className="container grid">
      <header className="card">
        <h1>Hospital Management System</h1>
        <p>Clean MERN starter with Patients, Doctors, and Appointments modules.</p>
        {error ? <p style={{ color: 'crimson' }}>{error}</p> : null}
      </header>

      <SectionCard title="Patients">
        <PatientForm onSubmit={createPatient} />
        <h3>Registered Patients ({patients.length})</h3>
        <ul>{patients.map((p) => <li key={p._id}>{p.fullName} - {p.gender}, {p.age}</li>)}</ul>
      </SectionCard>

      <SectionCard title="Doctors">
        <DoctorForm onSubmit={createDoctor} />
        <h3>Doctors ({doctors.length})</h3>
        <ul>{doctors.map((d) => <li key={d._id}>{d.fullName} - {d.specialty}</li>)}</ul>
      </SectionCard>

      <SectionCard title="Appointments">
        <AppointmentForm patients={patients} doctors={doctors} onSubmit={createAppointment} />
        <h3>Upcoming Appointments ({appointments.length})</h3>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id}>
              {new Date(appointment.appointmentDate).toLocaleString()} - {appointment.patientId?.fullName} with Dr. {appointment.doctorId?.fullName} ({appointment.status})
            </li>
          ))}
        </ul>
      </SectionCard>
    </main>
  );
}
