import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import UserRoutes from './UserRoutes';
import CategoryRoutes from './CategoryRoutes';
import PublishRoutes from './PublishRoutes';
import LogRoutes from '@src/routes/LogRoutes';


// **** Variables **** //

const apiRouter = Router();


// Routers

const logsRouter = Router();
logsRouter.get(Paths.Logs.Get, LogRoutes.getAll);

const publishRouter = Router();
publishRouter.post(
  Paths.Publish.Post,
  PublishRoutes.publishMessage
);

const categoryRouter = Router();

categoryRouter.get(
  Paths.Categories.Get,
  CategoryRoutes.getAll
);

const userRouter = Router();

// Get all users
userRouter.get(
  Paths.Users.Get,
  UserRoutes.getAll,
);


apiRouter.use(Paths.Publish.Base, publishRouter);
apiRouter.use(Paths.Users.Base, userRouter);
apiRouter.use(Paths.Categories.Base, categoryRouter);
apiRouter.use(Paths.Logs.Base, logsRouter);


// **** Export default **** //
export default apiRouter;
