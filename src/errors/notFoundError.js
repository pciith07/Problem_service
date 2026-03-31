const BaseError = require("./baseError")
const {StatusCodes} = require('http-status-codes')

class NotFoundError extends BaseError{
    constructor(resourceName, resourceValue){
        super("NotFoundError", StatusCodes.NOT_FOUND, `The requested resource: ${resourceName} with value ${resourceValue}`,
            {resourceName,
            resourceValue}
        );
    }
}

module.exports = NotFoundError;
