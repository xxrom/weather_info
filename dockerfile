# Select base image
FROM node:20-alpine

# Create app directory in Docker
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY yarn.lock ./

ARG DOCKER_PORT
ARG WEATHER_API 
ENV DOCKER_PORT=$DOCKER_PORT
ENV WEATHER_API=$WEATHER_API

# Disable Next telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Install app dependencies
RUN yarn install --pure-lockfile --production

# Bundle app source
COPY . .

# After copying your application code into the image
RUN chown -R node:node /app

# Switch user
USER node

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE $DOCKER_PORT

# Define the command to run your app
CMD [ "yarn", "dev" ]