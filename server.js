const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const morgan = require('morgan');

//initialise an instance of an express app
const app = express();

//create a port number for the server to listen to.
const PORT = process.env.PORT || 4001;

//mount packages
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

//Require api router from api.js and mount routes
const apiRouter = require('./api/api.js');
app.use('/api', apiRouter);

app.use(errorHandler());

app.listen(PORT, () => {
 console.log(`Server is listening to PORT ${PORT}`);
});

module.exports = app;
