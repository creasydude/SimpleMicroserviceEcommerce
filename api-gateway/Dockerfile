FROM node:latest as base

WORKDIR /usr/app
COPY package*.json ./

RUN npm install 
COPY . .

FROM base as production

# RUN npm install pm2 -g
RUN npm run build