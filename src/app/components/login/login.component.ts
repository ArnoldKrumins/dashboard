import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../models/user';
import {AuthenticationService} from '../../common/services/authentication.service';
import {UserService} from '../../common/services/user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-atomize-login',
  providers: [AuthenticationService, UserService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loading = false;
  private userLoaded = false;
  private busy = false;
  error = '';
  constructor(private router: Router, private authService: AuthenticationService, private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.loading = true;
    this.busy = true;
    this.authService.login(f.value.email, f.value.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/home']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      this.busy = false;
      });
  }
}
