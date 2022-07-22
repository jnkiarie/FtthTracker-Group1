FROM node:16-alpine

# set working directory
WORKDIR /app

# copy essentials
COPY package*.json /app/

# install packages
RUN npm i

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy everything else
COPY . /app/

# port mapping
ENV PORT 3000

EXPOSE 3000

# start app
CMD [ "npm", "run", "start" ]