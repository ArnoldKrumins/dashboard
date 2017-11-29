import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  public user: Observable<User> ;
  constructor(private httpClient: HttpClient) {}

  getUser(): boolean {
    this.user = new Observable<User>();
    this.user = this.httpClient.get<User>('../../assets/data/user.json');
    return true;
  }
}
