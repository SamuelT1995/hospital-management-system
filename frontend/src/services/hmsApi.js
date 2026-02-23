import { apiClient } from './apiClient';

export const hmsApi = {
  getPatients: () => apiClient.get('/patients'),
  createPatient: (payload) => apiClient.post('/patients', payload),

  getDoctors: () => apiClient.get('/doctors'),
  createDoctor: (payload) => apiClient.post('/doctors', payload),

  getAppointments: () => apiClient.get('/appointments'),
  createAppointment: (payload) => apiClient.post('/appointments', payload)
};
