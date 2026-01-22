# Medibooker

A medical appointment booking system built with React and Express.js.

## Features

- Browse available doctors
- View appointment slots by doctor and date
- Book appointments with patient details
- RESTful API backend with MongoDB

## Tech Stack

**Frontend:** React, React Router, Tailwind CSS, CRACO  
**Backend:** Express.js, Node.js  
**Database:** MongoDB Atlas  
**Deployment:** Vercel (serverless functions)

## Project Structure

```
medibooker/
├── api/                    # Backend (Express serverless function)
│   ├── Controllers/        # Route handlers
│   ├── Repositories/       # Database queries
│   ├── Services/           # Business logic
│   ├── lib/                # Shared utilities (MongoDB connection)
│   └── db/                 # Sample data for seeding
├── client/                 # Frontend (React)
│   └── src/
│       ├── Components/     # React components
│       ├── Services/       # API calls
│       └── Routing/        # Route definitions
└── vercel.json             # Deployment configuration
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/doctors` | Get all doctors |
| GET | `/api/appointments` | Get all appointments |
| POST | `/api/appointments` | Create a new appointment |

## Local Development

1. Clone the repository
2. Copy `.env.example` to `.env` and add your MongoDB connection string
3. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3001](http://localhost:3001)

## Deployment

This project is configured for Vercel deployment:

1. Connect your GitHub repo to Vercel
2. Add `MONGODB_URI` environment variable in Vercel settings
3. Deploy

## Sample Data

Sample doctor and appointment data is available in `api/db/` for seeding your MongoDB database.
