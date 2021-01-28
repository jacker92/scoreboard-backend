# Scoreboard-backend
This project is the backend of a scoreboard service. Project uses MongoDB as a database provider.

## How to run

### Without docker
1. Clone the project
```sh
git clone https://github.com/jacker92/scoreboard-backend
cd scoreboard-backend
```
2. Rename .env.example file and fill out the values 
```sh
mv .env.example .env
nano .env
# fill the values in .env
```

3. Install the dependencies
```sh
npm install
```

4. Run the project
```sh
npm run start
```

### With docker

1. Clone the project
```sh
git clone https://github.com/jacker92/scoreboard-backend
cd scoreboard-backend
```

2. Rename .env.example file and fill out the values 
```sh
mv .env.example .env
nano .env
# fill the values in .env
```

3. Build the image
```sh
docker build -t scoreboard-backend .
```

4. Run container instance
```sh
docker container run -d --name scoreboard-backend -p 3001:3001 scoreboard-backend
```