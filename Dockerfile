FROM node:8

COPY . /var/app

RUN npm install

WORKDIR /var/app

CMD [ "npm", "start" ]
