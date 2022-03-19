FROM node:15.13-alpine

WORKDIR /iot_data_front

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm run build

CMD [ "npm", "start" ]  