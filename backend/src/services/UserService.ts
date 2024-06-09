import UserRepo from '@src/repos/UserRepo';
import { IUser } from '@src/models/User';


// **** Variables **** //

export const USER_NOT_FOUND_ERR = 'User not found';


// **** Functions **** //

/**
 * Get all users.
 */
function getAll(): Promise<IUser[]> {
  return UserRepo.getAll();
}


// **** Export default **** //
export default {
  getAll
} as const;
