# Uber Clone Backend

This repository currently includes a Node.js/Express backend for an Uber clone project. The implemented API surface is small right now and focuses on user registration.

## Project Structure

```text
Uber_Clone/
|- Backend/
|  |- server.js
|  |- package.json
|  |- src/
|     |- app.js
|     |- DB/db.js
|     |- controllers/auth.controller.js
|     |- models/user.model.js
|     |- routes/user.route.js
|     |- services/user.service.js
|- package.json
```

## Tech Stack

- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- Bcrypt password hashing
- Express Validator

## Getting Started

### 1. Install dependencies

This repo currently has dependencies split between the root `package.json` and `Backend/package.json`, so install both:

```bash
npm install
cd Backend
npm install
```

### 2. Configure environment variables

Create or update `Backend/.env` with:

```env
PORT=8080
MONGODB_URL=mongodb://localhost:27017/Backend
JWT_SECRET=replace-with-a-secure-secret
```

### 3. Start MongoDB

Make sure your local MongoDB server is running before starting the backend.

### 4. Run the server

From the `Backend` folder:

```bash
node server.js
```

The API will start on `http://localhost:8080` unless you change `PORT`.

## API Base URL

```text
http://localhost:8080
```

## Implemented Endpoints

### `GET /`

Basic test route.

- Response: `200 OK`

```text
Hello world
```

### `POST /api/Auth/register`

Registers a new user and returns a JWT token with the created user record.

Request body:

```json
{
  "fullname": {
    "firstname": "Aditya",
    "lastname": "Sharma"
  },
  "email": "aditya@example.com",
  "password": "strongpass123"
}
```

Validation rules:

- `email` must be a valid email address
- `fullname.firstname` must be at least 3 characters
- `password` must be at least 8 characters

Success response:

- Status: `201 Created`

```json
{
  "token": "jwt-token-here",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "Aditya",
      "lastname": "Sharma"
    },
    "email": "aditya@example.com",
    "password": "hashed-password",
    "__v": 0
  }
}
```

Possible error responses:

- `400 Bad Request` for validation errors
- `400 Bad Request` if the email is already registered

Validation error shape:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "path": "email"
    }
  ]
}
```

Duplicate user error shape:

```json
{
  "message": "User already  exist "
}
```

## Notes About Current Implementation

- Auth routes are mounted under `/api/Auth`
- Passwords are hashed before storing the user
- JWT tokens are signed with `JWT_SECRET`
- The current register response includes the stored hashed password in the `user` object
- The root route is only a simple connectivity check

## API Reference

Detailed endpoint documentation is available in [Backend/API_DOCS.md](/c:/Users/ADITYA/Documents/Uber_Clone/Backend/API_DOCS.md).
