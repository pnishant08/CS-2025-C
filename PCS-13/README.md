# NOC Backend

**NOC Backend** is the server-side API for the NOC Portal, a platform designed to handle administrative tasks, user authentication, and management for the organization. It connects to a MongoDB database and handles user sessions, authentication, and document generation, including PDF creation.

## Features

- **User Authentication**: Implements Passport.js with local strategy for secure login and session management.
- **MongoDB Integration**: Stores user and session data securely in MongoDB.
- **File Uploads**: Supports file uploads using Multer (e.g., profile pictures, documents).
- **Session Management**: User sessions are managed using Express-session and stored in MongoDB.
- **Password Hashing**: User passwords are hashed using bcrypt for enhanced security.
- **PDF Generation**: Capabilities to generate dynamic PDFs using PDFKit.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Authentication**: Passport.js (Local strategy)
- **Database**: MongoDB with Mongoose
- **Session Management**: Express-session with connect-mongo for storing sessions in MongoDB
- **File Uploads**: Multer for handling multipart file uploads
- **Password Hashing**: bcrypt for securely hashing passwords
- **PDF Generation**: PDFKit for creating PDFs dynamically
- **Environment Variables**: dotenv for managing environment configurations

## Installation

To set up the backend locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/pnishant08/ERP_PORTAL.git


Email:pnishant0824@gmail.com