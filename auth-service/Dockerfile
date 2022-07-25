FROM node:latest as base

WORKDIR /usr/app
COPY package*.json ./

RUN npm install 
COPY . .

FROM base as production

RUN npm run build