const express = require('express')
const appRouter = express.Router();

const v1Router = require('./v1/index.js');

appRouter.use('/v1',v1Router);

module.exports = {
    appRouter
};
