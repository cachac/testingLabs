FROM node:20-alpine3.20 AS base

WORKDIR /app

RUN apk add curl bash --no-cache
RUN curl -sf https://gobinaries.com/tj/node-prune | sh

#----------------BUILD-----------------
FROM base AS builder
COPY ./src ./src
COPY package*.json ./

RUN npm install
RUN npm prune --production && node-prune

#----------------RELEASE-----------------
FROM node:20-alpine3.20 AS release
RUN apk add dumb-init

USER node

COPY --chown=node:node --from=builder /app/ ./

ARG APP_ENV
ENV APP_ENV=${APP_ENV}

EXPOSE 3000

CMD ["dumb-init", "node", "src/main.js"]
