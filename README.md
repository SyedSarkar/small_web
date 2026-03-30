# Small Web - Full Stack Application

A simple full-stack website built with React.js frontend and Node.js/Express backend with MongoDB database.

## Tech Stack

- **Frontend**: React.js with modern UI
- **Backend**: Node.js with Express
- **Database**: MongoDB Atlas
- **Deployment**: Netlify (frontend) + Render/Heroku (backend)

## Project Structure

```
small_web/
├── frontend/        # React frontend
├── backend/         # Node.js backend
├── package.json     # Root package file
└── README.md        # This file
```

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SyedSarkar/small_web.git
cd small_web
```

2. Install dependencies:
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

3. Set up environment variables in `backend/.env`:
```
MONGODB_URI=mongodb+srv://sm_user:your_password@smallwebcluster.grubjm7.mongodb.net/?appName=smallwebCluster
PORT=5000
```

4. Run the development server:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Deployment

### Frontend (Netlify)
1. Run `npm run build` to create the production build
2. Deploy the `frontend/build` folder to Netlify

### Backend (Render/Heroku)
1. Deploy the `backend` directory to your preferred hosting platform
2. Set the MongoDB URI environment variable

## Features

- Modern, responsive UI
- RESTful API endpoints
- MongoDB data persistence
- CRUD operations
- Netlify deployment ready
