import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../../common/services/authentication.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-atomize-login',
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = '';
  busy = false;

  constructor(private router: Router, public toastr: ToastsManager,
              private authService: AuthenticationService, private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.busy = true;
    this.authService.login(f.value.email, f.value.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/home']);
        }
      this.busy = false;
      },
        () => {
        this.busy = false;
        this.toastr.error('You have supplied incorrect login credentials', 'Login Error');
    });
  }
}
