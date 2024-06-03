FROM node:20-alpine

RUN apk update
RUN apk upgrade

RUN mkdir /spa

WORKDIR /spa

COPY . .

RUN npm install
RUN npm run test
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]