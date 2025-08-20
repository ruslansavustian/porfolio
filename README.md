# Portfolio Full-Stack Application

A modern full-stack application built with Next.js (frontend) and NestJS (backend) featuring user authentication.

## Project Structure

```
porfolio/
├── frontend/          # Next.js React frontend
└── backend/           # NestJS API backend
```

## Features

- 🔐 **User Authentication** - Complete login/register system
- 👤 **User Dashboard** - Protected dashboard with candidate management
- 📋 **Candidate Management** - Create, view, and manage candidates
- 🎨 **Modern UI** - Beautiful components with HeroUI and Tailwind CSS
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🔒 **JWT Authentication** - Secure token-based authentication
- ✅ **Form Validation** - Client and server-side validation with Zod
- 🚀 **TypeScript** - Full type safety across frontend and backend
- 🎭 **Smooth Animations** - Enhanced UX with Framer Motion
- 📚 **API Documentation** - Auto-generated Swagger documentation
- 🗄️ **Database Integration** - PostgreSQL with TypeORM
- 🧪 **Testing Ready** - Jest testing framework configured

## Quick Start

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd porfolio
   ```

2. **Setup Backend**

   ```bash
   cd backend
   npm install
   npm run start:dev
   ```

   Backend will run on http://localhost:3000

3. **Setup Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Frontend will run on http://localhost:3001

### Default Ports

- Frontend: http://localhost:3001
- Backend API: http://localhost:3000

## API Endpoints

### Authentication

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile (protected)

### Candidates

- `GET /candidates` - Get all candidates (protected)
- `POST /candidates` - Create new candidate (protected)
- `GET /candidates/:id` - Get candidate by ID (protected)
- `PUT /candidates/:id` - Update candidate (protected)
- `DELETE /candidates/:id` - Delete candidate (protected)

### API Documentation

- `GET /api` - Swagger API documentation (available in development)

## Environment Variables

### Backend (.env)

```
JWT_SECRET=your-secret-key
PORT=3000
```

### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Development

### Backend Development

```bash
cd backend
npm run start:dev    # Start in development mode
npm run build        # Build for production
npm run start:prod   # Start in production mode
```

### Frontend Development

```bash
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

## Technology Stack

### Frontend

- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **HeroUI 2.8.2** - Modern React component library
- **Framer Motion 12.23.12** - Animations and transitions
- **React Hook Form 7.62.0** - Form handling and validation
- **Zod 4.0.17** - Schema validation
- **Axios 1.11.0** - HTTP client for API requests
- **Lucide React 0.540.0** - Icon library

### Backend

- **NestJS 11.0.1** - Node.js framework with decorators
- **TypeScript 5.7.3** - Type safety
- **PostgreSQL** - Primary database
- **TypeORM 0.3.25** - ORM for database operations
- **JWT** - JSON Web Token authentication
- **Passport 0.7.0** - Authentication middleware
- **Passport JWT 4.0.1** - JWT strategy for Passport
- **bcrypt 6.0.0** - Password hashing
- **class-validator 0.14.2** - DTO validation
- **class-transformer 0.5.1** - Object transformation
- **Swagger 11.2.0** - API documentation
- **Jest 30.0.0** - Testing framework

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **ts-node** - TypeScript execution
- **Nodemon** - Development server auto-reload

## Project Features

### Authentication Flow

1. User visits the homepage
2. Can register a new account or login with existing credentials
3. Upon successful authentication, user is redirected to dashboard
4. Protected routes require valid JWT token
5. User can logout to clear authentication state

### Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected API routes
- Input validation on both frontend and backend
- CORS configuration for frontend-backend communication
