// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   loginForm:FormGroup;

//   constructor(private fb: FormBuilder, private router:Router){
//     this.loginForm = this.fb.group({
//       username:['',Validators.required],
//       password:['', Validators.required]
//     })
//   }

//   login(){
//     if(this.loginForm.valid){
//       const username = this.loginForm.get('username')?.value;
//       const password = this.loginForm.get('password')?.value;

//       localStorage.setItem('username', username);
//       localStorage.setItem('password', password);

//       this.router.navigate(['/main']);
//     }else{
//       alert('Please fill in both username and password')
//     }
//   }



//   // username: string='';
//   // password: string='';

//   // constructor(private router:Router){}

//   // login(){
//   //   if(this.username==='admin'&& this.password==='admin123'){
//   //     localStorage.setItem('username', this.username);
//   //     localStorage.setItem('password',this.password);
//   //     this.router.navigate(['/main']);
//   //   }else{
//   //     alert('Invalid Log In!')
//   //   }
//   // }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
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
  
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
  
      this.router.navigate(['/main'], { queryParams: { products: 'true' } });
    } else {
      alert('Please fill in both username and password');
    }
  }  
}
