# FROM node:18
# WORKDIR /usr/local/apps/orte-backend

# COPY package.json ./

# RUN npm install && npm cache clean --force

# WORKDIR /usr/local/apps/orte-backend/dev
# COPY . .

# EXPOSE 20000

# CMD ["npm", "run", "start"]

FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

VOLUME [ "/app/node_modules" ]

CMD ["npm", "run", "start"]