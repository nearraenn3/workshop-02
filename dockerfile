FROM node:12.18.2-stretch
WORKDIR /app
# Depenedencies/library
COPY package*.json ./
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
# COPY All files
COPY . .
EXPOSE 80
CMD [ "npm", "start" ]