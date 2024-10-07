import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  updateEmployeeForm: FormGroup;
  // employeeId: number | null = null;
  employeeId!: number;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Initialize the form group with validators
    this.updateEmployeeForm = this.fb.group({
      first_Name: ['', Validators.required],
      last_Name: ['', Validators.required],
      position: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.paramMap.get('id')!;
    this.loadEmployee();
  }
  loadEmployee(): void {
    // Fetch the employee details from the service and populate the form
    this.productService.getEmployeeById(this.employeeId).subscribe(employee => {
      this.updateEmployeeForm.patchValue(employee);
    });
  }
  
  // updateEmployee(): void {
  //   if (this.updateEmployeeForm.valid && this.employeeId) {
  //     console.log(this.updateEmployeeForm.value); // Log form data for debugging
  //     this.productService.updateEmployee(this.employeeId, this.updateEmployeeForm.value).subscribe(
  //       () => {
  //         alert('Employee updated successfully!');
  //         this.router.navigate(['/main']); // Navigate back to main page after update
  //       },
  //       error => {
  //         console.error('Error updating employee:', error);
  //       }
  //     );
  //   }
  // }
  
  


  updateEmployee(): void {
    if (this.updateEmployeeForm.valid) {
      this.productService.updateEmployee(this.employeeId, this.updateEmployeeForm.value).subscribe(() => {
        alert('Employee updated successfully!');
        this.router.navigate(['/main']);
      });
    }
  }
}


// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ProductService } from '../product.service';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-update-employee',
//   templateUrl: './update-employee.component.html',
//   styleUrls: ['./update-employee.component.css']
// })
// export class UpdateEmployeeComponent implements OnInit {

//   updateEmployeeForm: FormGroup;
//   employeeId: number | null = null;

//   @Output() employeeUpdated: EventEmitter<any> = new EventEmitter(); // EventEmitter to send updated data back

//   constructor(
//     private productService: ProductService,
//     private route: ActivatedRoute,
//     private fb: FormBuilder,
//     private router: Router
//   ) {
//     this.updateEmployeeForm = this.fb.group({
//       first_Name: ['', Validators.required],
//       last_Name: ['', Validators.required],
//       position: ['', Validators.required]
//     });
//   }

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       this.employeeId = +params.get('id')!;

//       if (this.employeeId) {
//         this.productService.getEmployeeById(this.employeeId).subscribe(
//           employee => {
//             this.updateEmployeeForm.patchValue(employee); 
//           },
//           error => {
//             console.error('Error fetching employee data:', error);
//           }
//         );
//       }
//     });
//   }

//   updateEmployee(): void {
//     if (this.updateEmployeeForm.valid && this.employeeId) {
//       this.productService.updateEmployee(this.employeeId, this.updateEmployeeForm.value).subscribe(
//         updatedEmployee => {
//           this.employeeUpdated.emit(updatedEmployee);  // Emit the updated employee data
//           alert('Employee updated successfully!');
//         },
//         error => {
//           console.error('Error updating employee:', error);
//         }
//       );
//     }
//   }
// }
