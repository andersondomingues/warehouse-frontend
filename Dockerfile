# stage 1: production-ready build
FROM node:latest AS build
COPY package.json /app/package.json
RUN npm install
RUN npm build
COPY build /app/build
CMD ["node", "build/server.js"]