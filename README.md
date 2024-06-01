# Authentication API (NodeJS)

This is an authentication API, that is, it has user registration and login, using secure methods such as encryption, etc...

## API documentation

#### ENV (Enviroment Variables)

Changing environment variables to your own variables, example available in file: .env-example

| Parameters       | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `PORT`           | `number` | Port to connect the fastify server |
| `MYSQL_USER`     | `string` | Your database user                 |
| `MYSQL_PASSWORD` | `string` | Password to access your database   |
| `MYSQL_DATABASE` | `string` | Name of your database              |

#### Register user

```http
  POST /user/register
```

| Parameters | Type     | Description                         |
| :--------- | :------- | :---------------------------------- |
| `name`     | `string` | The user name                       |
| `email`    | `string` | The user email                      |
| `password` | `string` | The password that will be encrypted |

REQUIREMENTS:

- All parameters are required

## Technologies used

- Typescript, NodeJS, Fastify, MySQL, JWT e Vitest.

## Running the tests (Vitest)

To run the tests, use the following commands

```shell
  npm run test or npm run test:watch
```
