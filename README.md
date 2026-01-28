# 🌿 Kekik API

A modern, high-performance, and lightweight REST API built with **Hono**, **Drizzle ORM**, and **Bun**. Designed as a perfect starting point for scalable TypeScript applications.

![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)

## Features

- **Blazing Fast:** Powered by [Bun](https://bun.sh) and [Hono](https://hono.dev) framework
- **Type-Safe:** 100% TypeScript with [Drizzle ORM](https://orm.drizzle.team)
- **Modern Database:** PostgreSQL with UUIDs and relational integrity
- **Containerized:** Docker & Docker Compose ready
- **Production Ready:** CI/CD with GitHub Actions and automated deployments

---

## 🛠️ Tech Stack

| Component     | Technology              |
| ------------- | ----------------------- |
| **Runtime**   | Bun                     |
| **Framework** | Hono                    |
| **ORM**       | Drizzle                 |
| **Database**  | PostgreSQL              |
| **Language**  | TypeScript              |
| **Container** | Docker & Docker Compose |

---

## Quick Start

### Prerequisites

- [Bun](https://bun.sh) installed
- Docker & Docker Compose (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/awaiden/kekik-api.git
   cd kekik-api
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Create a `.env` file with:

   ```env
   DB_USER=postgres
   DB_PASSWORD=your_secure_password
   DB_NAME=kekik_db
   DB_HOST=localhost
   DB_PORT=5432

   DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}
   ```

4. **Start PostgreSQL (Docker)**

   ```bash
   docker-compose up -d
   ```

5. **Run migrations**

   ```bash
   bun db:push
   bun db:seed
   ```

6. **Start development server**
   ```bash
   bun dev
   ```

The API will be available at `http://localhost:3000`

---

## API Routes

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| `GET`  | `/`             | Health check      |
| `GET`  | `/users`        | Get all users     |
| `GET`  | `/users/:id`    | Get user by ID    |
| `GET`  | `/posts`        | Get all posts     |
| `GET`  | `/posts/:id`    | Get post by ID    |
| `GET`  | `/comments`     | Get all comments  |
| `GET`  | `/comments/:id` | Get comment by ID |

---

## Project Structure

```
src/
├── index.ts           # Application entry point & routes
└── db/
    ├── index.ts       # Database connection
    └── schema.ts      # Drizzle ORM schema definitions

scripts/
└── seed.ts            # Database seeding script

deploy/
└── docker-compose.yml # Production deployment config
```

---

## Available Scripts

```bash
# Development
bun dev              # Start dev server with hot reload

# Database
bun db:push          # Apply schema changes
bun db:studio        # Open Drizzle Studio UI
bun db:seed          # Seed database with sample data

# Production
bun build            # Build for production
bun start            # Run production build

# Docker
docker-compose up -d          # Start PostgreSQL
docker-compose down           # Stop PostgreSQL
```

---

## Docker Deployment

### Run with Docker Compose

```bash
docker-compose up -d
```

### Pull Pre-built Image

```bash
docker pull ghcr.io/awaiden/kekik-api:latest
docker run -p 3000:3000 --env-file .env ghcr.io/awaiden/kekik-api:latest
```

---

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) file for details.

---

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

---

## Contact

For questions or support, please reach out via GitHub issues.
