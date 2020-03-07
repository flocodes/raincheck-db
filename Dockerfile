FROM node:12 AS build

WORKDIR /app

COPY ["package.json", "yarn.lock", "tsconfig.json", "./"]
COPY ./src ./src

RUN yarn install --frozen-lockfile && yarn build

FROM node:12-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY ["package.json", "yarn.lock", "schema.graphql", "./"]
RUN yarn install --frozen-lockfile --production
COPY --from=build /app/build ./build

CMD ["yarn", "start"]
