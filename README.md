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

### Option 1: Netlify (Recommended - Static Frontend Only)
⚠️ **Note**: Netlify can only host static files. For full functionality, you need to deploy the backend separately.

1. **Deploy Frontend to Netlify:**
   - Go to [Netlify](https://netlify.com) and sign up
   - Click "New site from Git" 
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `backend/public`
   - Add environment variable: `NODE_VERSION=18`

2. **Deploy Backend to Render/Heroku:**
   - Deploy the `backend` folder to [Render](https://render.com) or [Heroku](https://heroku.com)
   - Set environment variable: `MONGODB_URI=mongodb+srv://sm_user:m4iJTpxzh5GgX2kI@smallwebcluster.grubjm7.mongodb.net/?appName=smallwebCluster`

### Option 2: Render (Full Stack - Recommended)
1. Go to [Render](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm install && cd frontend && npm install && npm run build && cd .. && cp -r frontend/build public`
   - Start command: `npm start`
   - Environment variables:
     - `MONGODB_URI=mongodb+srv://sm_user:m4iJTpxzh5GgX2kI@smallwebcluster.grubjm7.mongodb.net/?appName=smallwebCluster`

### Option 3: Vercel (Full Stack Alternative)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project root
3. Configure as static site with serverless functions for API

## Features

- Modern, responsive UI
- RESTful API endpoints
- MongoDB data persistence
- CRUD operations
- Netlify deployment ready
