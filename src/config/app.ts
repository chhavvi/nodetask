import * as CONSTANTS from '../constants';

export const APP = Object.freeze({
    ENV: process.env.NODE_ENV,
    PORT: parseInt(process.env.PORT),
    HOST: process.env.DOMAIN_NAME,
});
