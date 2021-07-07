FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package*.json .

RUN npm i -g @nestjs/cli
RUN npm i --production=true

RUN apt-get -q update && apt-get -qy install netcat

COPY . .

RUN npm run build

CMD ["sh", "-c", "npx typeorm migration:run && npx typeorm schema:sync && npm run start:prod"]