# Project Setup Guide

## Project Overview

This project is a SvelteKit application built with TypeScript and TailwindCSS. It provides an invoice management system with a modern, responsive user interface.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v20 or later) - [Download](https://nodejs.org/)

- **pnpm** (v8 or later) - [Installation Guide](https://pnpm.io/installation)

- **Docker** (optional, for containerized setup) - [Download](https://www.docker.com/products/docker-desktop)

- **Docker Compose** (optional, typically bundled with Docker Desktop)

## Traditional Setup (using pnpm)

### 1. Clone the repository

```bash

git clone [repository-url]

cd [project-directory]

```

### 2. Install dependencies

```bash

pnpm install

```

### 3. Set up environment variables

```bash

cp .env.example .env

```

Edit the `.env` file and configure the environment variables according to your needs.

### 4. Start the development server

```bash

pnpm dev

```

The application will be available at <http://localhost:3000>.

### 5. Build for production

```bash

pnpm build

```

### 6. Preview the production build

```bash

pnpm preview

```

## Docker Setup

Docker allows you to run the application in an isolated environment without installing Node.js or other dependencies directly on your machine.

### 1. Clone the repository

```bash

git clone [repository-url]

cd [project-directory]

```

### 2. Set up environment variables

```bash

cp .env.example .env

```

Edit the `.env` file and configure the environment variables according to your needs.

### 3. Build and start the Docker containers

```bash

docker compose up --build

```

This command builds the Docker image and starts the container. The application will be available at <http://localhost:3000>.

### 4. Running in development mode

For development with live reload:

```bash

docker compose up

```

### 5. Stopping the containers

```bash

docker compose down

```

### 6. Running in production mode

```bash

docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build

```

Note: You might need to create a `docker-compose.prod.yml` file with production-specific settings.

## Development Workflow

### Local Development (Traditional Setup)

1. Start the development server: `pnpm dev`

2. Make changes to the code

3. The development server will automatically reload with your changes

4. Run tests: `pnpm test`

5. Lint code: `pnpm lint`

6. Format code: `pnpm format`

### Local Development (Docker Setup)

1. Start the containers: `docker compose up`

2. Make changes to the code

3. The application will automatically reload with your changes

4. Run tests inside the container: `docker compose exec app pnpm test`

5. Lint code inside the container: `docker compose exec app pnpm lint`

6. Format code inside the container: `docker compose exec app pnpm format`

## Available Scripts

| Command | Description |

|---------|-------------|

| `pnpm dev` | Start the development server |

| `pnpm build` | Build the application for production |

| `pnpm preview` | Preview the production build locally |

| `pnpm test` | Run tests |

| `pnpm lint` | Run ESLint to check code quality |

| `pnpm format` | Format code with Prettier |

| `pnpm check` | Type-check TypeScript files |

## Environment Variables

| Variable | Description | Default |

|----------|-------------|---------|

| `NODE_ENV` | Environment (development/production) | development |

| `VITE_API_URL` | URL for backend API | - |

| `PORT` | Port to run the server on | 3000 |

| `HOST` | Host to bind to | 0.0.0.0 |

| `ORIGIN` | Public-facing URL | - |

Additional environment variables may be required depending on your project's specific needs. Check `.env.example` for a complete list.

## Common Issues and Troubleshooting

### Port Already in Use

If you see an error like "Port 3000 is already in use":

```bash

# For traditional setup

lsof -i :3000

kill -9 [PID]

  

# For Docker setup

docker compose down

```

### Node.js Version Issues

This project requires Node.js v20 or later. If you're encountering errors:

```bash

# Check your Node.js version

node -v

  

# If using nvm, you can switch versions:

nvm use 20

  

# Or install Node.js 20 if needed:

nvm install 20

```

### Docker Container Not Starting

If your Docker container fails to start:

1. Check the logs: `docker compose logs`

2. Ensure Docker is running

3. Verify your `.env` file is correctly configured

4. Try rebuilding: `docker compose up --build`

### Build Errors

If you encounter build errors:

1. Remove node_modules and reinstall:

   ```bash

   rm -rf node_modules

   pnpm install

   ```

2. Clear the build cache:

   ```bash

   pnpm clean

   # or for Docker:

   docker compose exec app pnpm clean

   ```

### Changes Not Reflecting

If your changes aren't showing up:

1. For Docker, ensure volumes are properly mounted in `docker-compose.yml`

2. Clear your browser cache or do a hard refresh (Ctrl+F5)

3. Restart the development server or Docker container

### Network Errors in Docker

If your Docker container can't connect to external services:

1. Check your Docker network settings

2. Ensure required services are defined in `docker-compose.yml`

3. Verify environment variables are correctly passed to the container
