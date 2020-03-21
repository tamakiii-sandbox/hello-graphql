# hello-graphql

## How to use
~~~sh
make -f docker.mk install ENVIRONMENT=development
docker-compose up
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