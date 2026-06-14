FROM node:18-alpine3.19

WORKDIR /app

COPY package*.json /app

RUN npm install && npm cache clean --force

COPY . /app

EXPOSE 5000

CMD ["node", "server.js"]