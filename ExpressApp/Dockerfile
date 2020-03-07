FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && apt-get install -y vim

RUN npm install
RUN npm install nodemon -g

COPY . .

EXPOSE 3000

CMD ["nodemon", "start"]
