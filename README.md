# Hospital Management System (MERN)

A clean, scalable MERN starter for hospital workflows.

## Folder Structure

```bash
backend/
  src/
    app.js
    server.js
    config/
      env.js
      db.js
    models/
      patient.model.js
      doctor.model.js
      appointment.model.js
    controllers/
      patient.controller.js
      doctor.controller.js
      appointment.controller.js
    routes/
      index.js
      patient.routes.js
      doctor.routes.js
      appointment.routes.js
    middlewares/
      error.middleware.js
    utils/
      catchAsync.js
  .env.example
  package.json

frontend/
  src/
    app/
      DashboardPage.jsx
    components/common/
      SectionCard.jsx
    features/
      patients/PatientForm.jsx
      doctors/DoctorForm.jsx
      appointments/AppointmentForm.jsx
    services/
      apiClient.js
      hmsApi.js
    styles/
      global.css
    App.jsx
    main.jsx
  package.json
```

## What I need from you before full run

Please provide these values when you are ready to run locally/deploy:

1. **MongoDB connection string**
   - Example: `mongodb://127.0.0.1:27017/hospital_management`
   - Atlas example: `mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority`
2. **Frontend origin for CORS**
   - Example: `http://localhost:5173`
3. *(Optional)* Final API URL for frontend
   - Example: `http://localhost:5000/api/v1`

## Run Locally

### 1) Backend

```bash
cd backend
cp .env.example .env
# edit .env with your MONGO_URI
npm install
npm run dev
```

Backend base URL: `http://localhost:5000/api/v1`

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend URL: `http://localhost:5173`

If backend runs elsewhere, set `VITE_API_URL`.

## API Endpoints

- `GET /api/v1/health`
- `GET /api/v1/patients`
- `POST /api/v1/patients`
- `GET /api/v1/doctors`
- `POST /api/v1/doctors`
- `GET /api/v1/appointments`
- `POST /api/v1/appointments`
