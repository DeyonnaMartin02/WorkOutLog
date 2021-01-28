
require('dotenv').config();

let express = require('express');

let app = express();

let sequelize = require('./db');
 
let journal = require('./controllers/journalcontroller');

let user = require('./controllers/usercontroller');


sequelize.sync();

app.use(express.json());


app.use('/user', user);


app.use('/user', register);


app.use('/test', function(req, res){
    res.send('This is a message from the test endpoint on the server.');
})

app.listen(3000, function(){
   
    console.log('App is listening on port 3000.');
})

app.use('/user', register);

//Login Endpoint
app.use('/user', login);


app.use('/test', function(req, res){
    res.send('This is a message from the test endpoint on the server.');
})

app.listen(3000, function(){
   
    console.log('App is listening on port 3000.');
})

app.use('/user', login);


//log/

app.use('/log', log);


app.use('/test', function(req, res){
    res.send('This is a message from the test endpoint on the server.');
})

app.listen(3000, function(){
   
    console.log('App is listening on port 3000.');
})

app.use('/log', log);


app.use('/log', log);
//log/:id endpoint
app.use('/log','id input');


app.use('/test', function(req, res){
    res.send('This is a message from the test endpoint on the server.');
})

app.listen(3000, function(){
   
    console.log('App is listening on port 3000.');
})

app.use('/log','id input');