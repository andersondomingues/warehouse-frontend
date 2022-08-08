# stage 1: production-ready build
FROM node:latest AS build
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN npm run build 
RUN npm install -g serve
CMD ["serve", "-s", "build"]