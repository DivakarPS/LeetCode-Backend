const BaseError = require("../errors/base.error");
const { statusCode, StatusCodes } = require('http-status-codes');

//4 parameters are required for error handling middleware, otherwise it will be considered as a normal middleware
function errorHandler(err, req, res, next) {
  if( err instanceof BaseError){
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.details,
      data: {}
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something went wrong !!",
    error: err,
    data: {}
  });

}

module.exports = errorHandler;