FROM node:14-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm i -g @nestjs/cli
RUN npm i --production=true

RUN apk update && apk add netcat-openbsd

COPY . .

RUN npm run build

CMD ["sh", "-c", "npx typeorm migration:run && npx typeorm schema:sync && npm run start:prod"]