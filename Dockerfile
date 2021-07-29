FROM node:14.15.4

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package* ./
RUN npm ci

# Bundle app source
COPY . .

EXPOSE 4000
CMD [ "npm", "start" ]
