# Select base image
FROM node:21-alpine as builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn install

# Clear the Yarn cache to free up space
RUN yarn cache clean

COPY context ./context
COPY public ./public
COPY src ./src
COPY next.config.mjs ./
COPY package.json ./
COPY postcss.config.js ./
COPY tailwind.config.ts ./
COPY tsconfig.json ./

RUN yarn build

# Production stage
FROM node:21-alpine
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

COPY public ./public
COPY package.json ./

ARG DOCKER_PORT
ARG WEATHER_API
ENV DOCKER_PORT=$DOCKER_PORT
ENV WEATHER_API=$WEATHER_API

# Disable Next telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# After copying your application code into the image
#RUN chown -R node:node /app

# Switch user
#USER node

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE $DOCKER_PORT

# Define the command to run your app
CMD [ "yarn", "start" ]
