import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // login() {
  //   if (this.loginForm.valid) {
  //     const username = this.loginForm.get('username')?.value;
  //     const password = this.loginForm.get('password')?.value;

  //     localStorage.setItem('username', username);
  //     localStorage.setItem('password', password);

  //     this.router.navigate(['/main']);
      

  //     // if(username==='admin'&& password==='admin123'){  
  //     // localStorage.setItem('username', username);
  //     // localStorage.setItem('password', password);

  //     // this.router.navigate(['/main']);
  //     // }else{
  //     //   alert('Invalid credentials. Please Try Again.');
  //     // }


  //   } else {
  //     alert('please fill in both username and password');
  //   }
  // }


  
  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
  
      // localStorage.setItem('username', username);
      // localStorage.setItem('password', password);
  
      // this.router.navigate(['/main'], { queryParams: { products: 'true' } });

      this.authService.LogIn(username, password);
    } else {
      alert('Please fill in both username and password');
    }
  }  
}
