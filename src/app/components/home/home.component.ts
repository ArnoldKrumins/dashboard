import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
