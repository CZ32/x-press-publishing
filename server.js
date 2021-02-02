const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const morgan = require('morgan');


//initialise an instance of an express app
const app = express ();

//create a port number for the server to listen to.
const PORT = process.env.PORT || 4001

app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler());
app.use(morgan('dev'));


app.listen(PORT, () => {
    console.log(`Server is listening to PORT ${PORT}`);
});

module.exports = app;