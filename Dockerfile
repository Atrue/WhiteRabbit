FROM ubuntu:latest
MAINTAINER Anton Trusv 'wtf.ozu@gmail.com'
RUN apt-get update -y
RUN apt-get install -y python3-pip python3-dev build-essential
COPY . /app
WORKDIR /app
RUN pip3 install -r requirements.txt
RUN apt-get install -y yarn
RUN yarn install