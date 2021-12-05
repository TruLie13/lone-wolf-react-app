import { User } from './User';

export interface Authentication {
  token?: string;
  user?: User;
}
