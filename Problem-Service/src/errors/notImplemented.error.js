const BaseError = require('./base.error');

const { StatusCodes } = require('http-status-codes');

class NotImplementedError extends BaseError {
    constructor(methodName) {
        super("NotImplemented Error", StatusCodes.NOT_IMPLEMENTED, `${methodName} is not implemented yet`, {});
    }
}

module.exports = NotImplementedError;