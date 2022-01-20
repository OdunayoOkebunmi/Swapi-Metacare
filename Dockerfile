FROM node:14.13.0

WORKDIR /usr/metacare-swapi

COPY ./ ./

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]