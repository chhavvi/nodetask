import * as express from 'express';
import * as UserRoutes from './v1';

export class Routes {
  private static BASE_PATH = {
    users: '/api/v1',
  };

  static async mount(app: express.Express) {
    app.use(Routes.BASE_PATH.users, <express.Application>UserRoutes);
  }
}
