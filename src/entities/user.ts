
import { Users, UserRole } from '../model';
import * as CONSTANTS from '../constants';
import { generateRandomString } from '../utils/UniversalFunc';
export class UserClass {
    /**
     * registering a user in system
     * @param params 
     */
    async signUpUser(params) {
        try {
            //check email already exist in system
            let checkEmailExist = await this.isEmailExists(params);
            //if not exist then create one record 
            if (!checkEmailExist) {
                //check count in user table 
                let checkUsersExist = await Users.count({ where: { status: CONSTANTS.APP.STATUS.ACTIVE } });
                let role;

                /* if counted record in user table = 0 that means it is first user than mark this user as admin and enter record in user_role table
                 if record exist then mark this as employee
                */
                if (checkUsersExist === 0) {
                    role = CONSTANTS.APP.USERROLE.ADMIN;
                } else {
                    role = CONSTANTS.APP.USERROLE.EMPLOYEE;
                }
                //create random token 
                const passwordResetToken = await generateRandomString(CONSTANTS.APP.RANDOM_STRING_LENGTH);
                params.token = passwordResetToken;

                // create a new entry for this email in user table
                let userDetail = await this.createUser(params)
                //if user with same role not exist than
                let checkUserRoleAlreadyExist = await UserRole.findOne({ where: { user_id: userDetail.id, role_id: role } });
                if (!checkUserRoleAlreadyExist) {
                    let userRoleObj = {
                        user_id: userDetail.id,
                        role_id: role
                    }
                    //add the entry in userRole table
                    await UserRole.create(userRoleObj);
                }
            } else {
                //if user email already exist in system 
                return Promise.reject({ message: CONSTANTS.ERROR_MESSAGE.USER_ALREADY_EXIST, code: 409 });
            }
        } catch (err) {
            console.error("error in function", err);
            throw new Error(err);
        }
    }
    // check email exist
    async isEmailExists(params: any) {
        try {
            const userData = await Users.findOne({
                where: {
                    email: params.email.toLowerCase().trim(),
                },
            });
            return JSON.parse(JSON.stringify(userData));
        } catch (error) {
            throw error;
        }
    }
    // create user
    async createUser(params) {
        try {
            const newUser = await Users.create({
                email: params.email,
                token: params.token,
            });
            return newUser;
        } catch (error) {
            throw error;
        }
    }
}
