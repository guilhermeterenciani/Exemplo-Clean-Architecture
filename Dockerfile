# syntax=docker/dockerfile:1
FROM node:16.16.0

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --development

COPY . .

CMD ["npm","run","start"]