# 🌿 Kekik API

A modern, high-performance, and lightweight dummy API built with **Hono**, **Drizzle ORM**, and **Bun**. Designed to be the perfect starting point for scalable TypeScript microservices.

[![Build and Push Image](https://github.com/awaiden/kekik-api/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/awaiden/kekik-api/actions)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## 🚀 Features

- **Blazing Fast:** Powered by [Bun](https://bun.sh) and [Hono](https://hono.dev).
- **Type-Safe:** Full TypeScript support with [Drizzle ORM](https://orm.drizzle.team).
- **Modern Database:** PostgreSQL with UUIDs and automated relations.
- **CI/CD Ready:** Automated Docker builds using [Nixpacks](https://nixpacks.com) and GitHub Actions.
- **Containerized:** Ready to deploy anywhere via GHCR (GitHub Container Registry).

---

## 🛠️ Tech Stack

- **Runtime:** Bun
- **Framework:** Hono (Express-compatible, Edge-ready)
- **ORM:** Drizzle (The TypeScript SQL tool)
- **Database:** PostgreSQL
- **Deployment:** Nixpacks + Docker + GitHub Actions

---

## 📦 Getting Started

### 🚀 Quick Deployment

Just run this command to start the full stack:

```bash
curl -sSL https://raw.githubusercontent.com/awaiden/kekik-api/master/deploy/docker-compose.yml -o docker-compose.yml
docker-compose up -d
```

### 1. Clone the repository

```bash
git clone [https://github.com/](https://github.com/)awaiden/kekik-api.git
cd kekik-api
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
DB_USER=postgres
DB_PASSWORD=your_secure_password
DB_NAME=kekik_db
DB_HOST=localhost
DB_PORT=5435

DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}

```

### 3. Spin up Database (Docker)

```bash
docker-compose up -d

```

### 4. Push Schema & Seed

```bash
bun db:push
bun db:seed

```

### 5. Run Development Server

```bash
bun dev

```

---

## 🏗️ Architecture

Kekik API follows a modular structure to keep the code clean and maintainable:

- `src/db/schema.ts`: Database tables and relations definition.
- `src/index.ts`: Entry point.

---

## 🐳 Docker Production Build

This project uses **Nixpacks** for zero-config Docker builds. You can pull the latest image directly from GHCR:

```bash
docker pull ghcr.io/awaiden/kekik-api:latest

```
