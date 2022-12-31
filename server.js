// Require Express, GraphQL..
const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// GraphQL Tools..
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

// Init Schema, rootValue..
const typeArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolverArray = loadFilesSync(path.join(__dirname, '**/*.resolver.js'));

// Init Apollo, Express Server..
async function startApolloServer() {
    // Schema..
    const schema = makeExecutableSchema({
        typeDefs: typeArray,
        resolvers: resolverArray,
    });
    // Express..
    const PORT = process.env.PORT || 3000;
    const app = express();
    // Server Instance..
    const server = new ApolloServer({ schema });
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
    // Listen for Requests to Server..
    app.listen(PORT, () => {
        console.log(`Listening For GraphQL Queries on ${PORT}/graphql`);
    });
}

// Start Server..
startApolloServer();