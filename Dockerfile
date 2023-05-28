FROM node:20.2.0-alpine3.16

RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli

USER node

WORKDIR /home/node/app

#COPY ./run.sh .

EXPOSE 3000
EXPOSE 50051

ENTRYPOINT [ "./run.sh" ]