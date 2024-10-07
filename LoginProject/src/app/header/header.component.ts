import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: string = '';

  constructor(private cookieService: CookieService,private router: Router) {}

  ngOnInit() {
    // this.username = localStorage.getItem('username') || 'Guest';

    this.username = this.cookieService.get('username') || 'Guest';
  }

  logOut() {

    this.cookieService.delete('token');  
    this.cookieService.delete('username'); 
    // this.username = 'Guest';
    // this.router.navigate(['/login']);

  }
}
