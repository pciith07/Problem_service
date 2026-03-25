const BaseError = require("./baseError")
const {StatusCodes} = require('http-status-codes')

class NotImplemented extends BaseError{
    constructor(operation){
        super("NotImplemented", StatusCodes.NOT_IMPLEMENTED, `${operation} is not implemented yet`,{});
    }
}

module.exports = NotImplemented;
