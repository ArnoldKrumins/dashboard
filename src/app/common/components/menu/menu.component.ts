import {Component, HostListener, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-atomize-menu',
  providers: [AuthenticationService],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() user: User;
  private show = false;
  constructor(private router: Router, private authService: AuthenticationService) { }

  @HostListener('document:click')
  click() {
    console.log('clicked');
    // this.show = false;
  }



  ngOnInit() {
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
