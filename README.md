# Raincheck

The app that tells you about the weather when you need it.
Get personalized weather notifications for your recurring trips.

Raincheck is a three-part project:

* [raincheck-db](https://github.com/flocodes/raincheck-db): SQL database for trips with a GraphQL interface, built with [graphql-yoga](https://github.com/prisma-labs/graphql-yoga), [Prisma](https://www.prisma.io/), the [HERE Geocoding API](https://developer.here.com/products/geocoding-and-search) and [Docker](https://www.docker.com/)
* [raincheck-notify](https://github.com/flocodes/raincheck-notify): Weather notification service with direct SQL access to the database, built with [Sendgrid](https://sendgrid.com/) and the [DarkSky forecast API](https://darksky.net/dev/docs)
* [raincheck-web](https://github.com/flocodes/raincheck-web): Single-page web app for managing trips, built with [React](https://reactjs.org/), [Apollo Client](https://www.apollographql.com/docs/react/) and [Material-UI](https://material-ui.com/)

All three project parts use [Typescript](https://www.typescriptlang.org/).

## raincheck-db

### Project setup

`raincheck-db` requires Docker to run the Prisma and MySQL images.

1. Run `yarn install` in the directory you cloned this repository.

2. [Sign up for a HERE developer account](https://developer.here.com/) to get an app ID and API key. Set them in the `.env` file.

3. Set the rest of the environment variables in `.env`, according to `.env.example`.
You can use arbitrary values for users, passwords and secrets.
The `FRONTEND_URI` must be set to the URI of `raincheck-web`, e.g. `http://localhost:3000`.
This is required for [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

4. Start the Prisma and MySQL Docker images by running `yarn run docker-up-dev`

5. Generate the DB schema by running `yarn run prisma-deploy`

### Running raincheck-db

* To run a development build with hot reloads, run `yarn run start-dev`
* To build to Javascript and run the result, first run `yarn run build`, then `yarn run start`
* To build the backend Docker image locally, run `yarn run docker-backend`
* To test the deployment, run `yarn run docker-up`

### Linting

To run ESLint, run `yarn run lint`.

### Deployment

`raincheck-db` requires a host with both `docker` and `docker-compose` installed. Digitalocean provides a Ubuntu-based image with both here: https://marketplace.digitalocean.com/apps/docker

#### GitHub Action

The configured GitHub Action in `./.github/workflows/main.yml` will run ESLint, build the backend Docker image and push it to DockerHub.
You need to configure this action to work with your Docker account.
Additionally, you need to set your Docker password/token as a secret in your GitHub repository of `raincheck-db`.

#### Preparation

The first time you set up the production environment, follow these steps:

1. Clone the repository
2. Set up the environment variables in .env
3. In `docker-compose.prod.yml`, allow accessing the `prisma` service at port 4466 from outside of Docker by setting
  ```
  prisma:
    ports:
      - 4466:4466
  ```
4. Install `yarn` by following the instructions at https://classic.yarnpkg.com/en/docs/install#debian-stable
5. Run `yarn global add prisma`
6. Run `yarn docker-up` to generate and run all containers
7. Generate the DB schema by running `prisma deploy -e .env`
8. (Optional) Remove prisma from the system. It is not needed anymore.
9. Remove the port setting from step 3 from `docker-compose.prod.yml`
10. Run `yarn docker-up` to regenerate all containers

#### Update

As long as the Prisma datamodel has not changed, you can update the production environment by following these steps:

1. Update the backend Docker container by running `docker pull <DockerHub repository>`
2. Run `yarn docker-up` to regenerate the backend container

If the Prisma datamodel has changed, you have to follow the preparation steps.
