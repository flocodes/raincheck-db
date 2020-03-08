# Deployment

## Host

Raincheck requires a host with both `docker` and `docker-compose` installed. Digitalocean provides a Ubuntu-based image with both here: https://marketplace.digitalocean.com/apps/docker

## Preparation

The first time you set up the production environment, follow these steps:

1. Clone the repository
2. Set up the environment variables in .env
3. In `docker-compose.prod.yml`, allow accessing the `prisma` service at port 4466 from outside of docker by setting
  ```
  prisma:
    ports:
      - 4466:4466
  ```
4. Install `yarn` by following the instructions at https://classic.yarnpkg.com/en/docs/install#debian-stable
4. Run `yarn global add prisma`
5. Generate the DB schema by running `prisma deploy -e .env`
6. (Optional) Remove prisma from the system. It is not needed anymore.
7. Remove the port setting from step 3 from `docker-compose.prod.yml`
8. Run `yarn docker-up` to generate and run all containers

## Update

As long as the Prisma datamodel has not changed, you can update the production environment by following these steps:

1. Update the backend docker container by running `docker pull flodocks/raincheck-db`
2. Run `yarn docker-up` to regenerate the backend container

If the Prisma datamodel has changed, you have to follow the preparation steps.
