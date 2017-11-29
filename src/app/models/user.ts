import {Hotel} from './hotel';

export class User {
  email: string;
  password: string;
  username: string;
  company: string;
  currency:string;
  timezone:string;
  hotels: Array<Hotel>;

}

