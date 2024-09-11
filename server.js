// server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers/resolvers');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`Servidor GraphQL corriendo en http://localhost:4000${server.graphqlPath}`)
);