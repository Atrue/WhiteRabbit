FROM node:carbon
MAINTAINER Anton Trusov 'wtf.ozu@gmail.com'

WORKDIR /app

RUN apt-get update -y
RUN apt-get install -y python3-pip python3-dev build-essential

COPY . /app

RUN pip3 install -r requirements.txt

RUN npm install gulp-cli -g
RUN npm install