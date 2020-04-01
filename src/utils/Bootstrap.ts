
import { SEQ_CONNECTION } from '../config/db';
export class BootClass {
    static async Boot() {
        console.log('Server is booting');
        await BootClass.connectDB();
    }

    private static async connectDB() {
        console.log('connectDB function');
        SEQ_CONNECTION.authenticate()
            .then(() => {
                console.log('***DB Connection established successfully.');
            })
            .catch(err => {
                console.log('error in bootstrap', err);
            });
        SEQ_CONNECTION.sync({ alter: true })
            .then(async () => {
                console.log(`***Database & tables created!`);
            })
            .catch(err => {
                console.error('error while creating table', err);
            })
    }

}
