// *** The db.js file sets the connection to our Postgres database using Sequelize

const Sequelize = require('sequelize');

const sequelize = new Sequelize('journal2', 'postgres', 'PASSWORD', {
    
    host: 'localhost',
    dialect: 'postgres'
});

s
sequelize.authenticate().then(
    
    function() {
        console.log('Connected to journal2 postgres database');
    },
   
    function(err){
        console.log(err);
    }
);


module.exports = sequelize; 