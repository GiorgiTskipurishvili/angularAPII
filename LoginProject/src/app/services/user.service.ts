import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import {Token} from '../models/token'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl="https://localhost:7020/api/Users";
  constructor(private http: HttpClient) { }

  saveUser(user: User):Observable<any>{
    return this.http.post<any>(this.apiUrl, user)
  }

  getUserByUsername(username: string):Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${username}`)
  }
  
  authenticateUser(login: Login) : Observable<Token>
  {
    return this.http.post<Token>("https://localhost:7020/api/Authenntication",login);

    
    //Authenticate
    //return this.http.post<Token>("https://localhost:7020/api/Authenntication/Authenticate",login);
  }
}
