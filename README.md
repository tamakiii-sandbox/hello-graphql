# hello-graphql

## How to use
~~~sh
make -f docker.mk install ENVIRONMENT=development
docker-compose up --build
open "http://localhost:4000/playground"
~~~

## Query example
~~~graphql
# Write your query or mutation here
query {
  humans {
    id
  }
  human(id:3) {
    name
  }
}
~~~

## Manually run main task
~~~sh
docker-compose build
docker-compose run --rm node bash
docker-entrypoint.dev.sh
~~~
~~~sh
docker-compose build
docker-compose run --rm playground bash
docker-entrypoint.dev.sh
~~~

## Trouble shooting
~~~sh
make -f dev.mk clean
make -f docker.mk clean
# and back to "How to use"
~~~

## Directory structure
~~~sh
$ tree -I 'node_modules|*.js|*.graphql' .
.
├── Makefile
├── README.md
├── dev.mk
├── docker
│   ├── node
│   │   ├── Dockerfile
│   │   ├── docker-entrypoint.dev.sh
│   │   └── docker-entrypoint.sh
│   └── playground
│       ├── Dockerfile
│       ├── docker-entrypoint.dev.sh
│       └── docker-entrypoint.sh
├── docker-compose.yml
├── docker.mk
├── node
│   ├── Makefile
│   ├── dev.mk
│   ├── package-lock.json
│   ├── package.json
│   └── src
├── package-lock.json
└── playground
    ├── Makefile
    ├── dev.mk
    ├── package-lock.json
    ├── package.json
    └── src

7 directories, 20 files
~~~
