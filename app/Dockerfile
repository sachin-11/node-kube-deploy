FROM node:18 as build
WORKDIR /app
COPY package.json .
RUN npm install
EXPOSE 80
COPY index.js /app/
COPY . .
CMD ["node", "index.js"]