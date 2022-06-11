const express = require('express');
const schema = require('../schema/schema');
const { graphqlHTTP } = require('express-graphql');
const Cors = require('cors');

const app = express();
const PORT = 3005;

app.use(Cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});
