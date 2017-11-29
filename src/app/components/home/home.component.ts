import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../common/services/user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  providers: [UserService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private user: Observable<User>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new Observable<User>();
    this.user = this.userService.user;
  }

}
