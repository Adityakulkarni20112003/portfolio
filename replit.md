# Portfolio Application - Aditya D. Kulkarni

## Overview

This is a modern full-stack portfolio application showcasing Aditya D. Kulkarni's work as an AI enthusiast, full-stack developer, and ML/Deep Learning innovator. The application features a React frontend with shadcn/ui components, an Express.js backend, and uses Drizzle ORM for database operations. The architecture follows a monorepo structure with shared types and schemas.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Email Service**: Nodemailer with Gmail integration
- **Session Management**: Built-in session handling with in-memory storage

## Key Components

### Database Schema
- **Users Table**: Stores user authentication data with UUID primary keys
- **Contact Messages Table**: Stores portfolio contact form submissions
- **Schema Validation**: Zod schemas for type-safe data validation

### Core Features
1. **Portfolio Sections**:
   - Hero section with professional introduction
   - About me with statistics and highlights
   - Skills showcase with categorized technologies
   - Projects gallery with detailed descriptions
   - Experience timeline
   - Education and achievements
   - Contact form with email integration

2. **Contact System**:
   - Form validation using React Hook Form + Zod
   - Email notifications via Nodemailer
   - Database storage of contact messages
   - Toast notifications for user feedback

3. **Responsive Navigation**:
   - Smooth scrolling to sections
   - Active section tracking
   - Mobile-friendly hamburger menu

## Data Flow

1. **Client-Side**:
   - React components render portfolio sections
   - TanStack Query manages API calls and caching
   - Form submissions handled with React Hook Form
   - Animations triggered by scroll position via Framer Motion

2. **API Layer**:
   - Express routes handle contact form submissions
   - Input validation using shared Zod schemas
   - Database operations through Drizzle ORM
   - Email sending via Nodemailer

3. **Database**:
   - PostgreSQL database hosted on Neon
   - Drizzle migrations in `/migrations` directory
   - Type-safe queries with Drizzle ORM

## External Dependencies

### Core Dependencies
- **Database**: `@neondatabase/serverless` for Neon database connection
- **ORM**: `drizzle-orm` and `drizzle-kit` for database operations
- **UI Library**: Multiple `@radix-ui` packages for accessible components
- **Validation**: `zod` for schema validation
- **Email**: `nodemailer` for email functionality
- **Animation**: `framer-motion` for UI animations

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full TypeScript support across client and server
- **Linting**: ESLint configuration
- **Styling**: Tailwind CSS with PostCSS

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `/dist/public`
- **Backend**: esbuild bundles server code to `/dist/index.js`
- **Database**: Drizzle migrations can be pushed via `npm run db:push`

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string for Neon database
- `EMAIL_USER`: Gmail account for sending notifications
- `EMAIL_PASS`: Gmail app password for authentication
- `CONTACT_EMAIL`: Recipient email for contact form submissions

### Development vs Production
- Development uses Vite dev server with HMR
- Production serves static files via Express
- Database migrations handled through Drizzle Kit
- Replit-specific optimizations included in Vite config

The application is designed to be easily deployable on platforms like Replit, Vercel, or traditional hosting providers with minimal configuration changes.