require('dotenv').config();

//  Auth V1
require('./v1/auth/register');
require('./v1/auth/signIn');

//  Close connections
require('./utils/closeApp');
