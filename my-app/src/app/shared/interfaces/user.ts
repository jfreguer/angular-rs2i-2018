import { Auth } from './auth';

export interface User extends Auth {
  id: string;
  name: string;
  firstName: string;
}
