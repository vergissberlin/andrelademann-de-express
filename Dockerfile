FROM node:8

WORKDIR /var/app

COPY . /var/app

RUN npm i -g npm &&\
		npm i

CMD [ "npm", "start" ]
