# stage 1: production-ready build
FROM node:14-alpine AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin
COPY package.json /app/package.json
RUN npm install
CMD ["npm", "build"]

# stage 2: cleanup
FROM node:14-alpine 