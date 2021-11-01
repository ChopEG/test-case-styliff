FROM node:10-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY . /app

RUN npm ci
RUN npm build
EXPOSE 3000

CMD ["npm", "start"]
