[1mdiff --git a/node/src/schema.graphql b/node/src/schema.graphql[m
[1mindex 28cb2e0..bd9b66f 100644[m
[1m--- a/node/src/schema.graphql[m
[1m+++ b/node/src/schema.graphql[m
[36m@@ -2,14 +2,12 @@[m [mtype Query {[m
   human(id: ID): Human![m
   humans: [Human!]![m
 }[m
[31m-[m
 type Human {[m
   id: ID![m
   name: String![m
   friends: [Human!]![m
   episodes: [Episode!]![m
 }[m
[31m-[m
 enum Episode {[m
   NEW_HOPE[m
   EMPIRE[m
[1mdiff --git a/node/src/server.js b/node/src/server.js[m
[1mindex 873663f..9b9d72f 100644[m
[1m--- a/node/src/server.js[m
[1m+++ b/node/src/server.js[m
[36m@@ -1,22 +1,8 @@[m
[31m-const { ApolloServer, gql } = require('apollo-server');[m
[32m+[m[32mconst path = require('path')[m
[32m+[m[32mconst { ApolloServer } = require('apollo-server')[m
[32m+[m[32mconst { importSchema } = require('graphql-import')[m
 [m
[31m-var typeDefs = gql(`[m
[31m-  type Query {[m
[31m-    human(id: ID): Human![m
[31m-    humans: [Human!]![m
[31m-  }[m
[31m-  type Human {[m
[31m-    id: ID![m
[31m-    name: String![m
[31m-    friends: [Human!]![m
[31m-    episodes: [Episode!]![m
[31m-  }[m
[31m-  enum Episode {[m
[31m-    NEW_HOPE[m
[31m-    EMPIRE[m
[31m-    JEDI[m
[31m-  }[m
[31m-`);[m
[32m+[m[32mconst typeDefs = importSchema(path.resolve(__dirname + '/schema.graphql'))[m
 [m
 class Loader {[m
   constructor(rows) {[m
