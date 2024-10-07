import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrl: './get-employee.component.css'
})
export class GetEmployeeComponent implements OnInit {
  employees: any[] = [];
  constructor(private productService: ProductService, private router: Router) {}


  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.productService.getEmployees().subscribe((data) => {
      this.employees = data.map(employee => ({
        ...employee,
        imageUrl: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' // Default avatar
      }));
    });
  }

  editClicked(id: number) {
    console.log(id);
    this.productService.getEmployeeById(id).subscribe(() => {


    })
  }

  deleteEmployee(id: number) {
    this.productService.deleteEmployee(id).subscribe(() => {
      this.getEmployees();
    });
  }
}
