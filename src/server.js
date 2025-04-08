const { ApolloServer } = require('apollo-server');
const connectDB = require('./config/database');
const typeDefs = require('./schemas/bookSchema');
const resolvers = require('./resolvers/bookResolver');

const startServer = async () => {
  // Connect to MongoDB
  await connectDB();

  // Create Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  // Start the server
  server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`);
  });
};

startServer().catch(error => {
  console.error('Server startup error:', error);
});