import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../common/services/user.service';


@Component({
  selector: 'app-home',
  providers: [UserService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: User = new User();
  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(res => {
      this.user = res;
    });
  }

  ngOnInit() {
  }
}
