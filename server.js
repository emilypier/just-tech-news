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
sequelize.sync({ force: true }).then(() => { //If value of force property is true, it will make tables re-create if there are any association changes.
  app.listen(PORT, () => console.log('Now listening'));
});
