# MediBooker

Medical appointment booking system built with React 18, Express 5, and MongoDB Atlas, deployed on Vercel with serverless functions.
Features Tailwind CSS styling, RESTful API, and responsive design for seamless healthcare appointment scheduling.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, React Router 6, Tailwind CSS |
| **Backend** | Express 5, Node.js 20 |
| **Database** | MongoDB Atlas |
| **Deployment** | Vercel (Serverless Functions) |

## Features

- Browse available doctors
- View appointment slots by doctor and date
- Book appointments with patient details
- RESTful API backend

## Why These Technologies?

- **React** - Component-based UI with efficient rendering and a large ecosystem
- **Tailwind CSS** - Utility-first CSS for rapid, consistent styling without leaving JSX
- **Express 5** - Minimal, flexible Node.js web framework with async/await support
- **MongoDB Atlas** - Managed NoSQL database with flexible schema, ideal for appointment data
- **Vercel** - Seamless deployment with serverless functions, automatic HTTPS, and GitHub integration

## Running Locally

### Prerequisites

- Node.js 20.x
- MongoDB Atlas account (or local MongoDB instance)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/matthewsearle01/medibooker.git
   cd medibooker
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/medibookerdb
   ```

3. **Install dependencies**
   ```bash
   npm install
   cd client && npm install && cd ..
   ```

4. **Build the frontend**
   ```bash
   npm run build
   ```

5. **Start the server**
   ```bash
   npm run dev
   ```

6. **Open the app**
   
   Visit [http://localhost:3001](http://localhost:3001)

### Development with Hot Reload

For frontend development with hot reload, run two terminals:

**Terminal 1 - API server:**
```bash
npm run dev
```

**Terminal 2 - React dev server:**
```bash
cd client && npm start
```

Visit [http://localhost:3000](http://localhost:3000) (React dev server proxies API calls to port 3001)

## Project Structure

```
medibooker/
├── api/                    # Backend (Express serverless function)
│   ├── Controllers/        # Route handlers
│   ├── Services/           # Business logic
│   ├── Repositories/       # Database queries
│   ├── lib/                # MongoDB connection
│   └── db/                 # Sample data
├── client/                 # Frontend (React)
│   ├── src/
│   │   ├── Components/     # React components
│   │   ├── Services/       # API calls
│   │   └── Routing/        # Route definitions
│   └── public/             # Static assets
├── vercel.json             # Vercel deployment config
└── package.json            # Root dependencies & scripts
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/doctors` | Get all doctors |
| GET | `/api/appointments` | Get all appointments |
| POST | `/api/appointments` | Create a new appointment |

## Deployment

This project is configured for Vercel:

1. Connect your GitHub repo to Vercel
2. Add `MONGODB_URI` environment variable in Vercel project settings
3. Deploy - Vercel will automatically build and deploy on push to `main`

## Sample Data

Sample doctor and appointment data is available in `api/db/` for seeding your MongoDB database.
