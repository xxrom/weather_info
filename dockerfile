# Select base image
FROM node:21-alpine AS deps

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn install --frozen-lockfile --no-cache

# Clear the Yarn cache to free up space
RUN yarn cache clean

# Builder
FROM node:21-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY context ./context
COPY public ./public
COPY src ./src
COPY next.config.mjs ./
COPY package.json ./
COPY postcss.config.js ./
COPY tailwind.config.ts ./
COPY tsconfig.json ./

RUN yarn build

# Clear the Yarn cache to free up space
RUN yarn cache clean

# Production stage
FROM node:21-alpine AS runner
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./

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
CMD [ "node_modules/.bin/next", "start" ]
