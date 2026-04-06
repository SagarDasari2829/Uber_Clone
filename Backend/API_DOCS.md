# Backend API Documentation

## Base URL

```text
http://localhost:8080
```

If `PORT` changes in `Backend/.env`, update the base URL accordingly.

## Routes Overview

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | Health/test route |
| POST | `/api/Auth/register` | Register a new user |

## `GET /`

Returns a plain text response to confirm the server is running.

### Response

- Status: `200 OK`

```text
Hello world
```

## `POST /api/Auth/register`

Creates a new user, hashes the password, saves the user in MongoDB, and returns a JWT token.

### Request Body

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

### Validation

- `email` must be a valid email
- `fullname.firstname` must contain at least 3 characters
- `password` must contain at least 8 characters

### Success Response

- Status: `201 Created`

```json
{
  "token": "jwt-token-here",
  "user": {
    "_id": "6611d7bb12ab34cd56ef7890",
    "fullname": {
      "firstname": "Aditya",
      "lastname": "Sharma"
    },
    "email": "aditya@example.com",
    "password": "$2b$10$examplehashedvalue",
    "__v": 0
  }
}
```

### Error Responses

#### Validation Error

- Status: `400 Bad Request`

```json
{
  "errors": [
    {
      "type": "field",
      "msg": "Password must be at least 8 characters long  ",
      "path": "password",
      "location": "body"
    }
  ]
}
```

#### Duplicate Email

- Status: `400 Bad Request`

```json
{
  "message": "User already  exist "
}
```

## Data Model Notes

The user document includes:

- `fullname.firstname`
- `fullname.lastname`
- `email`
- `password`
- `socketId`

## Current Limitations

- No login endpoint is implemented yet
- No protected routes are implemented yet
- Registration currently returns the hashed password as part of the user payload
- There is no dedicated error middleware yet
