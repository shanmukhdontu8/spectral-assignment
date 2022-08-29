FROM node:18.2-alpine
WORKDIR /react_frontend/meter-reading-app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
CMD ["npm", "run", "start"]

