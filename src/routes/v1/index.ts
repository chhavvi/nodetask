import * as express from 'express';
import *  as UserPublic from './user.routes.public';

const router = express.Router();
router.use('/users', <express.Application>UserPublic);

module.exports = router;   