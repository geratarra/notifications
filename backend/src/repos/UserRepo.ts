import { IUser } from '@src/models/User';
import orm from './MockOrm';


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(): Promise<IUser[]> {
  const db = await orm.openDb();
  return db.users;
}


// **** Export default **** //
export default {
  getAll
} as const;
