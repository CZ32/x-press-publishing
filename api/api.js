const express = require('express');
const apiRouter = express.Router();

//require artist router and append to api router
const artistsRouter = require('./artists.js');
apiRouter.use('/artists', artistsRouter);

//import series router and append it to api router
const seriesRouter = require('./series.js');
apiRouter.use('/series', seriesRouter);

module.exports = apiRouter;