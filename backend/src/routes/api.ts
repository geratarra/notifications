import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import User from '@src/models/User';
import UserRoutes from './UserRoutes';
import CategoryRoutes from './CategoryRoutes';
import PublishRoutes from './PublishRoutes';
import LogRoutes from '@src/routes/LogRoutes';


// **** Variables **** //

const apiRouter = Router()
const validate = jetValidator();


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

// Add one user
userRouter.post(
  Paths.Users.Add,
  validate(['user', User.isUser]),
  UserRoutes.add,
);

// Update one user
userRouter.put(
  Paths.Users.Update,
  // validate(['user', User.isUser]),
  UserRoutes.update,
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(['id', 'number', 'params']),
  UserRoutes.delete,
);

apiRouter.use(Paths.Publish.Base, publishRouter);
apiRouter.use(Paths.Users.Base, userRouter);
apiRouter.use(Paths.Categories.Base, categoryRouter);
apiRouter.use(Paths.Logs.Base, logsRouter);


// **** Export default **** //

export default apiRouter;
