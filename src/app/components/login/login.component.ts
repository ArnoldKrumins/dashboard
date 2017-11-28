import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../models/user';
import {AuthenticationService} from '../../common/services/authentication.service';

@Component({
  selector: 'app-atomize-login',
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User;
  private loading = false;
  private error = '';
  constructor(private router: Router, private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {

    this.user = new User();
    this.user.email = f.value.email;
    this.user.password = f.value.password;
    this.loading = true;
    this.authService.login(this.user.email, this.user.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/home']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
    // this.router.navigate(['/home']);
  }
}
