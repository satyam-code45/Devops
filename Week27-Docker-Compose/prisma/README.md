# Prisma Project

## Manual Installation

1. Install Node.js locally.
2. Clone the repository.
3. Install dependencies:
   - `npm install`
4. Start the database locally:
   - `docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
   - Go to [Neon.tech](https://neon.tech) and get a new database.
5. Update the `.env` file with your database credentials.
6. Run migrations:
   - `npx prisma migrate dev`
7. Generate Prisma Client:
   - `npx prisma generate`
8. Build the project:
   - `npm run build`
9. Start the application:
   - `npm run start`

## Docker Installation

1. Install Docker.
2. Create a network:
   - `docker network create user_project`
3. Start PostgreSQL:
   - `docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
4. Build the Docker image:
   - `docker build --network=host -t satyamcode45/prisma .`
5. Start the container:
   - `docker run --network user_project -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres -p 3000:3000 satyamcode45/prisma`

## Docker Compose Installation

1. Install Docker and Docker Compose.
2. Run:
   - `docker-compose up`

