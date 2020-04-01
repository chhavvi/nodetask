import * as express from 'express';
import { celebrate, Joi, errors } from 'celebrate';
import { UserClass } from '../../entities/user';
import * as CONSTANTS from '../../constants'
import { copyObject } from '../../utils/UniversalFunc';
import { sendError } from '../../utils/UniversalFunc';
const User = new UserClass()
const router = express.Router();


router.post('/signup',
    celebrate({
        body: Joi.object().keys({
            email: Joi.string().trim().email().required()
        })
    },
        {
            abortEarly: false
        }),
    async (req, res, next) => {
        try {
            let response = await User.signUpUser(req.body);
            let responseData = copyObject(CONSTANTS.SUCCESS.POST_201_DATA);
            responseData.data = response;
            responseData.message = CONSTANTS.SUCCESS_MESSAGE.SIGNUP_SUCCESS;
            res.status(responseData.code).send(responseData);
        } catch (error) {
            await sendError(error, res);
        }
    }
);
router.use(errors());
module.exports = router;

