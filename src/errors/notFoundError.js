const BaseError = require("./baseError")
const {StatusCodes} = require('http-status-codes')

class NotFoundError extends BaseError{
    constructor(details = {}){
        super("NotFoundError", StatusCodes.NOT_FOUND, "Not found", details);
    }
}

module.exports = NotFoundError;
