module.exports = {
  messages: {
    error: {
      UNEXPECTED_RUNNING: 'An unexpected error occurred while processing your request.',
    },
  },
  error: {
    name: {
      DOCUMENT_NOT_FOUND_ERROR: 'DocumentNotFoundError',
      VALIDATION_ERROR: 'ValidationError',
      NOT_FOUND: 'NotFoundError',
      INVALID_AUTH: 'InvalidAuthError',
      INVALID_SESSION: 'InvalidSessionError',
      INVALID_PLATFORM_ID: 'InvalidPlatformId',
    },
    code: {
      UNIQUE_CONSTRAINT: 11000,
    },
  },
  values: {
    cryptography: {
      PASSWORD_KEY: process.env.PASSWORD_KEY,
      TOKEN_KEY: process.env.TOKEN_KEY,
      SESSION_SIGNATURE_KEY: process.env.SESSION_SIGNATURE_KEY,
    },
    EXPIRATION_TIME_IN_SECONDS: 60 * 60 * 24 * 30,
    cookies: {
      DOMAIN: process.env.DOMAIN,
      SESSION: 'session',
    },
  },
  endpoints: {
    REGISTER: '/register',
    SIGN_IN: '/sign_in',
  },
  tables: {
    USERS: 'Users',
  },
};
