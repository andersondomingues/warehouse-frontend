# stage 1: production-ready build
FROM node:latest AS build
ARG backend_url
ENV ebackend_url ${backend_url}
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN echo "REACT_APP_BACKEND_URL=${ebackend_url}" > .env
RUN npm run build 
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]