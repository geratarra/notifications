FROM node:20-alpine

RUN apk update
RUN apk upgrade
RUN apt install curl

RUN mkdir /notifications

WORKDIR /notifications

COPY . .

RUN npm install
RUN npm run test:no-reloading
RUN npm run build

EXPOSE 8080
CMD [ "npm", "run", "dev" ]