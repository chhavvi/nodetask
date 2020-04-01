const ERROR_CODES = {
    400: 400,
    401: 401,
    403: 403,
    404: 404,
    409: 409,
    429: 429,
    500: 500,
    503: 503,
    418: 418,
    422: 422,
    411: 411,
  };
  
  export const ERROR = Object.freeze({
    VALIDATION_ERROR_400: {
      code: ERROR_CODES[400],
      message: '',
      errors: [], // add validation errors
    },
    VALIDATION_ERROR_411: {
      code: ERROR_CODES[411],
      message: 'Validation errors in your request',
      errors: [], // add validation errors
    },
    UNAUTHORIZED_401: {
      code: ERROR_CODES[401],
      message: 'Session Expired',
    },
    FORBIDDEN_403: {
      code: ERROR_CODES[403],
      message: 'The request is understood, but it has been refused or access is not allowed',
    },
    NOT_FOUND_404: {
      code: ERROR_CODES[404],
      message: 'The item does not exist',
    },
    CONFLICT_409: {
      code: ERROR_CODES[409],
      message: 'There was conflict in your request', // add request specific message if required
    },
    TOO_MANY_REQUESTS_429: {
      code: ERROR_CODES[429],
      message:
        'The request cannot be served due to the rate limit having been exhausted for the resource',
    },
    INTERNAL_SERVER_ERROR_500: {
      code: ERROR_CODES[500],
      message: 'Internal Server Error',
    },
    SERVICE_UNAVAILABLE_503: {
      code: ERROR_CODES[503],
      message: 'The server is up, but overloaded with requests. Try again later!',
    },
    USER_INACTIVE_418: {
      code: ERROR_CODES[418],
      message: 'User was blocked by admin',
    },
    USER_DELETED_418: {
      code: ERROR_CODES[418],
      message: 'User was deleted by admin',
    },
    PARAMS_MISSING_422: {
      code: ERROR_CODES[401],
      message: 'Parameters missing',
    },
  });
  