FROM node

WORKDIR /app

COPY . .

EXPOSE 8080

CMD npm run develop