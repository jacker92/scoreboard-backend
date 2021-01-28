FROM node:10.23

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]