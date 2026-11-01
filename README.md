# El7a2ni — Virtual Clinic and Pharmacy

A MERN web application that connects patients, doctors, pharmacists and administrators in one system. Patients book and pay for appointments, join a health package, chat with their doctor, and order medicine from the pharmacy. Doctors manage their schedule, follow-up requests and prescriptions. Pharmacists manage the medicine catalogue and orders. Administrators review employment applications and run the platform.

Built as a university team project (Team Caffeine).

## Features

### Patients
- Register, log in, and recover a password through an email one-time code
- Browse and filter doctors by speciality, name and availability
- Book, reschedule and cancel appointments, for themselves or for a linked family member
- Subscribe to a health package and get discounted appointments and medicine
- Pay by card through Stripe, or from a prepaid wallet
- Chat in real time with a doctor, and receive in-app and email notifications
- View prescriptions and order the prescribed medicine from the pharmacy
- Upload and manage medical documents and health records

### Doctors
- Apply to join the clinic by submitting an employment application and documents
- Accept the employment contract once an administrator approves it
- Manage appointments, availability slots and follow-up requests
- Write prescriptions and add medicine to them
- Chat with patients and receive their notifications

### Pharmacists
- Apply to join the pharmacy and accept the employment contract
- Add, update and archive medicine, including images, stock and alternatives
- View sales reports and track orders

### Administrators
- Review and approve doctor and pharmacist applications
- Add and remove administrators
- Manage health packages
- View platform-wide reports

## Tech stack

| Layer | Choice |
| --- | --- |
| Frontend | React 18 (Create React App), React Router 6, Chakra UI, MUI, React Bootstrap |
| Backend | Node.js, Express 4 |
| Database | MongoDB with Mongoose |
| Auth | JSON Web Tokens, Passport (local strategy), bcrypt |
| Realtime | Socket.IO for chat and notifications |
| Payments | Stripe |
| Email | Nodemailer (one-time codes and notifications) |

## Repository layout

```
backend/          Express API
  controllers/    Request handlers per domain (patients, doctors, pharmacists, orders, …)
  models/         Mongoose schemas
  routes/         Route definitions mounted in app.js
  middleware/     Auth guard
frontend/         React single-page app
  src/components/ Screens and shared UI
  src/CSS/        Clinic styles
  src/PharmacyCSS/ Pharmacy template styles
```

## Getting started

Requires Node.js 18+ and a MongoDB database (local or Atlas).

### 1. Backend

```bash
cd backend
npm install
npm run dev     # nodemon app.js
```

Create `backend/.env` with:

| Variable | Description |
| --- | --- |
| `MONGO_URI` | MongoDB connection string |
| `SECRET` | Secret used for JWT signing and the Express session |
| `STRIPE_SECRET_KEY` | Stripe secret key (test mode is fine) |
| `PORT` | API port, defaults to 3000 |

The Nodemailer transport that sends one-time codes and notifications is still
configured inline in the controllers rather than through environment variables;
move those credentials into `.env` before deploying anywhere real.

### 2. Frontend

```bash
cd frontend
npm install
npm start       # http://localhost:3000
```

The frontend proxies API calls to the backend through `http-proxy-middleware`; point it at the backend port if you change it.

## Known limitations

- Video calls between patient and doctor are not implemented; chat is text only.
- The backend serves a few legacy Jade/EJS views alongside the API.

## Team

Built by Team Caffeine as a university software engineering project.
