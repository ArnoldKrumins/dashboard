import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  getUser(): Observable<User> {
    return this.httpClient.get<User>('../../assets/data/user.json');
  }
}
