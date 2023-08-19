FROM node:18
WORKDIR /usr/local/apps/orte-backend

COPY package.json ./

RUN npm install && npm cache clean --force

WORKDIR /usr/local/apps/orte-backend/dev
COPY . .

EXPOSE 20000

CMD ["npm", "run", "start"]