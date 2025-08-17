# Portfolio Full-Stack Application

A modern full-stack application built with Next.js (frontend) and NestJS (backend) featuring user authentication.

## Project Structure

```
porfolio/
├── frontend/          # Next.js React frontend
└── backend/           # NestJS API backend
```

## Features

- 🔐 User authentication (login/register)
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🔒 JWT-based authentication
- ✅ Form validation with Zod
- 🚀 TypeScript throughout

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

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Axios** - HTTP client

### Backend

- **NestJS** - Node.js framework
- **TypeScript** - Type safety
- **JWT** - Authentication
- **Passport** - Authentication middleware
- **bcrypt** - Password hashing
- **class-validator** - DTO validation

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

## Next Steps

- [ ] Add database integration (PostgreSQL/MongoDB)
- [ ] Implement user profile management
- [ ] Add password reset functionality
- [ ] Set up deployment configurations
- [ ] Add unit and integration tests
- [ ] Implement refresh token mechanism

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
