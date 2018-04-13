const cors = require('cors');
const app = require('express')();
const schema = require('./graphql');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const PORT = process.env.PORT || 3030;

app.use(cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => { 
  console.log(`App Server listening on port ${PORT}.`);
});
