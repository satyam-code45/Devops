#Manual Installation
-install nodejs locally
-clone repo
-install dependencies (npm install)
-start the db locally
    -docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432  postgres
    -Go to neon.texh and get yourself a new db
-change the .env file and update your db credentials
-npx prisma migrate
-npx prisma generate
-npm run build
-npm run start


#Docker Installation
-Install Docker
-create a network
    -docker network create user_project
-Start Postgres 
    -docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
-Build the image
    -docker build --network=host  -t satyamcode45/prisma .
-start image
    -`docker run --network user_project -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres -p 3000:3000 satyamcode45/prisma`



#Docker Compose Installation
-Install docker, Docker compose
-Run docker-compose up