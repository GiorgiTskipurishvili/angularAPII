import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private router: Router){}
  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigate([''])
  }
}
