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
-


#Docker Compose Installation