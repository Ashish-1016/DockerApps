FROM node:18-alpine

WORKDIR /API

COPY  package.json .

RUN npm install

COPY . .

CMD ["npm","start"]




