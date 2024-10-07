import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookieService: CookieService) { }

  decodeToken() : any
  {
    let token = this.cookieService.get('token');
    return JSON.parse(window.atob(token.split('.')[1]));
  }
  
  getUsername(): string 
  {
    return this.decodeToken().username;
  }
}
