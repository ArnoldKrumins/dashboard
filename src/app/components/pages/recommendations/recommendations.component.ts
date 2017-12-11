import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../common/services/user.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-recommendations',
  providers: [UserService],
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
  public user: User = new User();
  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(res => {
      this.user = res;
    });
  }

  ngOnInit() {
  }

}
