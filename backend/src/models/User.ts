import moment from 'moment';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' +
  'with the appropriate user keys.';


// **** Types **** //

export interface IUser {
  id: number;
  name: string;
  email: string;
  created: Date;
  subscribed: { [key: string]: boolean };
  channels: string[];
}


// **** Functions **** //

/**
 * See if the param meets criteria to be a user.
 */
function isUser(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' &&
    'email' in arg && typeof arg.email === 'string' &&
    'name' in arg && typeof arg.name === 'string' &&
    'created' in arg && moment(arg.created as string | Date).isValid()
  );
}

/**
 * Create new User.
 */
function new_(
  name?: string,
  email?: string,
  created?: Date,
  id?: number, // id last cause usually set by db
  subscribed?: { [key: string]: boolean },
  channels?: string[]
): IUser {
  return {
    id: (id ?? -1),
    name: (name ?? ''),
    email: (email ?? ''),
    created: (created ? new Date(created) : new Date()),
    subscribed: (subscribed ?? {}),
    channels: (channels ?? [])
  };
}


// **** Export default **** //

export default {
  isUser,
  new: new_
} as const;
