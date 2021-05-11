const express = require('express');
const app = express();
const bodyParser = require('body-parser');//used bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

require('./connection');//connection with mongoose 

const forms = require('./routers/router');//routers file

app.use('/' , forms);

app.listen(4040 , ()=>{//server is listening on port 4040
    console.log("Server is listening...");
});