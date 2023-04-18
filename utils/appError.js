class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;

    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    // `${statusCode}` converts the 404 which is a number to a string so that that startsWith() function can be called on it.

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
