FROM node:12.18.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package* ./
RUN npm ci

# Bundle app source
COPY . .

EXPOSE 4000
CMD [ "npm", "start" ]
