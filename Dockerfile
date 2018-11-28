FROM node:10.13
COPY package.json package.json
RUN npm install
COPY . .
EXPOSE 8001
CMD ["npm","start"]