# Overview

This is a full-stack developer portfolio application built with React and Express. The project showcases Rumana Nachiyar M's professional profile, featuring sections for about, projects, skills, experience, innovation, achievements, and contact information. The application includes a contact form with backend API integration and uses modern web technologies with a clean, responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety and component-based development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming, using a dark theme with blue/purple accent colors
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **State Management**: React Query (TanStack Query) for server state management and API caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Development Setup**: Custom Vite integration for development mode with HMR support
- **Middleware**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless connection (@neondatabase/serverless)
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Current Implementation**: In-memory storage (MemStorage class) for development, with interfaces defined for easy database integration

## Database Schema
- **Contacts Table**: Stores contact form submissions with fields for name, email, subject, message, and timestamp
- **Users Table**: Basic user schema with username and password (prepared for future authentication)
- **Validation**: Zod schemas for runtime type validation of API requests and responses

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS for processing
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component

### Development Tools
- **TypeScript**: Type checking and development experience
- **ESBuild**: Fast bundling for production server builds
- **Drizzle Kit**: Database schema management and migrations
- **Wouter**: Lightweight router for single-page application navigation

### Database and Validation
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Zod**: Runtime type validation for forms and API endpoints
- **Neon Database**: Serverless PostgreSQL database service

### Form Handling
- **React Hook Form**: Form state management with validation
- **Hookform/Resolvers**: Integration between React Hook Form and Zod validation

### Utilities
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Utility for managing conditional CSS classes
- **clsx**: Conditional className utility for component styling