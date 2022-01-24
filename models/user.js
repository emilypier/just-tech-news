const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create our User model. User inherits all the functionality the Model class has.
class User extends Model {}

// create fields/columns for User model
User.init(
  {
    // defines an id column
    id: {
      type: DataTypes.INTEGER,      // uses special Sequelize DataTypes object provide what type of data it is
      allowNull: false,             // equivalent to SQL's `NOT NULL` option
      primaryKey: true,             // instructs that this is the Primary Key
      autoIncrement: true            // turns on auto increment
    },
    // defines a username column
    username: {
      type: DataTypes.STRING,
      allowNull:false
    },
    // defines an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,                 // there cannot be any duplicate email values in this table
      validate: {                   // if allowNull is set to false, we can run data through validators before creating table data
        isEmail: true    
      }
    },
    // defines a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]              // means password must be at least 4 characters long
      }
    }
  },
  {
    // TABLE CONFIGURATION OPTIONS
    sequelize,     // pass in our imported sequelize connection (direct connection to database)
    timestamps: false,     // don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true,     // don't pluralize name of database table
    underscored: true,     // use underscores instead of camel-casing
    modelName: 'user'     // make it so our model name stays lowercase in database
  }
);

module.exports = User;