FROM node:18
WORKDIR /usr/local/apps/orte-frontend

COPY package.json ./

RUN npm install && npm cache clean --force

WORKDIR /usr/local/apps/orte-frontend/dev
COPY . .

EXPOSE 3000

CMD ["npm", "run", "docker:dev"]

