import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../models/user';

@Component({
  selector: 'app-atomize-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.user = new User();
    this.user.email = f.value.email;
    this.user.password = f.value.password;
    this.router.navigate(['/home']);
  }
}
