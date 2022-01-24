const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => { //"sync" means that Sequelize is taking the models & connecting them to associated db tables. If it doesn't find a table, it'll create it
  app.listen(PORT, () => console.log('Now listening'));
});
