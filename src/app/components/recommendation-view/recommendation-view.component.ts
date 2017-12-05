import { Component, OnInit } from '@angular/core';
import {UserService} from '../../common/services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-recommendation-view',
  providers: [UserService],
  templateUrl: './recommendation-view.component.html',
  styleUrls: ['./recommendation-view.component.scss']
})
export class RecommendationViewComponent implements OnInit {
  public user: User = new User();
  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(res => {
      this.user = res;
    });
  }

  ngOnInit() {
  }

}
