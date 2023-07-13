const { StatusCodes} = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message = 'Something went wrong',
        explanation = 'Service layer error',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR) 

    {
        super();
        this.name = 'ServiceError';
        this.message = message;
        this.explanation = this.explanation
        this.statusCode = this.statusCode
    }
}

module.exports = ServiceError;