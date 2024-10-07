// import { Component, inject } from '@angular/core';
// import { ProductService } from '../product.service';
// import {FormBuilder, NonNullableFormBuilder, Validators} from '@angular/forms';

// @Component({
//   selector: 'app-save-employee',
//   templateUrl: './save-employee.component.html',
//   styleUrl: './save-employee.component.css'
// })
// export class SaveEmployeeComponent {
//   employees: any[] = [];
//   employeeId: number | null = null;

//   fb = inject(NonNullableFormBuilder);
//   newEmployeeForm=this.fb.group({
//     first_Name: ['', Validators.required],
//     last_Name: ['', Validators.required],
//     position: ['', Validators.required]
//   })

// constructor(private productService: ProductService) {}


// saveEmployee(): void {
//   if (this.newEmployeeForm.valid) {
//     this.productService.saveEmployee(this.newEmployeeForm.value).subscribe(() => {
//       alert('Employee saved successfully!');
//       this.newEmployeeForm.reset(); 
//     });
//   }
// }

// }

import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-save-employee',
  templateUrl: './save-employee.component.html',
  styleUrl: './save-employee.component.css'
})
export class SaveEmployeeComponent {
  employees: any[] = [];
  employeeId: number | null = null;

  fb = inject(NonNullableFormBuilder);
  newEmployeeForm = this.fb.group({
    first_Name: ['', Validators.required],
    last_Name: ['', Validators.required],
    position: ['', Validators.required]
  });

  // Inject Router into the constructor
  constructor(private productService: ProductService, private router: Router) {}

  saveEmployee(): void {
    if (this.newEmployeeForm.valid) {
      this.productService.saveEmployee(this.newEmployeeForm.value).subscribe(() => {
        alert('Employee saved successfully!');
        this.newEmployeeForm.reset();

        // Navigate to the '/main' route after saving the employee
        this.router.navigate(['/main']);
      });
    }
  }
}
