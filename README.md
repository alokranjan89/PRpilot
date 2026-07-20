# 🚀 PRPilot AI

> An AI-powered Open Source Mentor that helps developers understand GitHub repositories, discover beginner-friendly issues, and contribute to open source with confidence.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Express](https://img.shields.io/badge/Express-5.x-black)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791)

---

# 📖 Overview

Contributing to open source can be overwhelming for beginners.

A repository may contain hundreds of files, dozens of folders, and hundreds of open issues. New contributors often don't know:

- What does this project do?
- Where should I start?
- Which issue is beginner friendly?
- Which technologies do I need to know?
- How is this project structured?

PRPilot AI solves this problem using GitHub APIs and Generative AI.

Users authenticate with GitHub, select a repository, and receive AI-powered explanations, contribution guidance, and project insights.

---

# ✨ Features

## ✅ Authentication

- GitHub OAuth Login
- Passport.js Authentication
- JWT Authentication
- HttpOnly Cookie Authentication
- Protected Routes
- Current User API

---

## 👤 User Management

- GitHub Profile Sync
- Automatic User Creation
- Persistent Login
- Access Token Storage

---

## 📂 GitHub Integration *(Upcoming)*

- Fetch GitHub Profile
- Fetch User Repositories
- Repository Details
- README Extraction
- Open Issues
- Pull Requests

---

## 🤖 AI Repository Analysis *(Upcoming)*

- Repository Summary
- Tech Stack Detection
- Folder Structure Explanation
- Contribution Guide
- Beginner Roadmap
- Issue Explanation

---

## 🎯 Open Source Mentor *(Upcoming)*

- Beginner Friendly Issues
- Difficulty Estimation
- Required Skills
- Estimated Completion Time
- AI Contribution Suggestions

---

# 🏗 Architecture

```
                React Frontend
                       │
                       ▼
                Express API
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
 Authentication              GitHub Service
          │                         │
          ▼                         ▼
      Passport.js              GitHub REST API
          │
          ▼
      PostgreSQL
          │
          ▼
        Prisma ORM
          │
          ▼
        JWT Auth
```

---

# 🛠 Tech Stack

## Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Passport.js
- JWT
- Zod
- Cookie Parser
- Express Session

## APIs

- GitHub REST API
- Google Gemini API *(Upcoming)*

## Frontend *(Upcoming)*

- React
- TypeScript
- Tailwind CSS
- React Router
- Axios

---

# 📁 Project Structure

```
server/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│
│   ├── config/
│   │     passport.ts
│   │
│   ├── controllers/
│   │     auth.controller.ts
│   │     user.controller.ts
│   │
│   ├── middleware/
│   │     auth.middleware.ts
│   │     error.middleware.ts
│   │
│   ├── routes/
│   │     auth.routes.ts
│   │     user.routes.ts
│   │
│   ├── services/
│   │     auth.service.ts
│   │     user.service.ts
│   │
│   ├── utils/
│   │     asyncHandler.ts
│   │     jwt.ts
│   │
│   ├── validators/
│   │     user.validator.ts
│   │
│   ├── prisma/
│   │     prisma.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── package.json
└── tsconfig.json
```

---

# 🔐 Authentication Flow

```
User

↓

GitHub Login

↓

Passport.js

↓

GitHub OAuth

↓

Find/Create User

↓

PostgreSQL

↓

Generate JWT

↓

HttpOnly Cookie

↓

Protected APIs
```

---

# 🗄 Database Schema

## User

| Field | Type |
|--------|------|
| id | String |
| githubId | String |
| name | String |
| email | String |
| avatarUrl | String |
| accessToken | String |
| createdAt | DateTime |
| updatedAt | DateTime |

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/PRPilot.git

cd PRPilot/server
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create `.env`

```env
PORT=5000

DATABASE_URL="postgresql://postgres:password@localhost:5432/prpilot"

SESSION_SECRET=your_session_secret

JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=7d

GITHUB_CLIENT_ID=your_client_id

GITHUB_CLIENT_SECRET=your_client_secret

GITHUB_CALLBACK_URL=http://localhost:5000/api/auth/github/callback
```

---

## Run Prisma Migration

```bash
npx prisma migrate dev
```

---

## Start Server

```bash
npm run dev
```

Server runs at

```
http://localhost:5000
```

---

# 📌 Current API Endpoints

## Health

```
GET /api/health
```

---

## Authentication

```
GET /api/auth/github
```

GitHub Login

---

```
GET /api/auth/github/callback
```

GitHub Callback

---

```
GET /api/auth/me
```

Current User

---

## Users

```
GET /api/users
```

---

```
POST /api/users
```

Create User

---

# 📅 Roadmap

## Phase 1 ✅

- Express Setup
- PostgreSQL
- Prisma
- CRUD
- Zod Validation
- Error Handling
- Async Handler

---

## Phase 2 ✅

- GitHub OAuth
- Passport.js
- JWT
- HttpOnly Cookies
- Protected Routes

---

## Phase 3 🚧

- GitHub Profile API
- Repository API
- README API
- Issues API

---

## Phase 4 🚧

- Gemini Integration
- AI Repository Analysis
- Tech Stack Detection
- Contribution Guide

---

## Phase 5 🚧

- Beginner Issue Finder
- Issue Difficulty Prediction
- Contribution Roadmap

---

# 🧠 What I Learned

This project helped me gain practical experience with:

- Building scalable REST APIs
- OAuth Authentication
- JWT Authentication
- PostgreSQL Database Design
- Prisma ORM
- TypeScript
- Layered Architecture
- Service Pattern
- Error Handling
- API Security
- GitHub API Integration

---

# 📸 Screenshots

> Screenshots will be added after frontend development.

---

# 🤝 Contributing

Contributions are welcome.

Feel free to fork the repository and submit a pull request.

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Alok Ranjan**

- GitHub: https://github.com/alokranjan89
- LinkedIn: https://www.linkedin.com/in/alok-ranjan89/

---

⭐ If you found this project useful, consider giving it a star!
