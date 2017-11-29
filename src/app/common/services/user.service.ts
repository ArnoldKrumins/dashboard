import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUser() {
    return this.httpClient.get<User>('../../assets/data/user.json');
  }
}
