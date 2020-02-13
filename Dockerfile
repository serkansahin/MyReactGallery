FROM node:lts-alpine3.11

WORKDIR /opt

# install and cache app dependencies
COPY package.json yarn.lock ./
RUN yarn

COPY . ./

# start app
CMD ["yarn", "start"]
