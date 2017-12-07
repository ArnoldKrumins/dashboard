import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../common/services/authentication.service';
import {UserService} from '../../common/services/user.service';


@Component({
  selector: 'app-atomize-login',
  providers: [AuthenticationService, UserService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private busy = false;
  error = '';
  constructor(private router: Router, private authService: AuthenticationService, private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.busy = true;
    this.authService.login(f.value.email, f.value.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/home']);
        } else {
          this.error = 'Username or password is incorrect';
        }
      this.busy = false;
      });
  }
}
