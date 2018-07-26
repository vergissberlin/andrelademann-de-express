FROM node:8

WORKDIR /var/app

COPY . /var/app

RUN npm install

CMD [ "npm", "start" ]
