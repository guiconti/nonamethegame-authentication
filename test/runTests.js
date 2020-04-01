require('dotenv').config();

//  Auth V1
require('./v1/auth/register');

//  Close connections
require('./utils/closeApp');
