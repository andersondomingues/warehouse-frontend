# stage 1: production-ready build
FROM node:latest AS build
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN npm build
RUN npm install -g serve
COPY ./build /app/build
CMD ["serve", "-s", "/app/build.js"]