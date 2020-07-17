FROM node:12.18.2-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN ls

EXPOSE 3000

CMD [ "yarn", "start" ]