import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7020/api/Employees'; // Update with your API URL

  constructor(private http: HttpClient,  private cookieService: CookieService) {}

  // Get all employees with getEmployees
  // getEmployees(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  getEmployees() {
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Add the token to the Authorization header
    });

    return this.http.get<any[]>(this.apiUrl, { headers }); // Pass headers to the request
  }

  //Add a new employee with saveEmployee
  saveEmployee(employee:any): Observable<any>{
    return this.http.post<any>(this.apiUrl, employee);
  }

  //deleteEmployee by ID
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // deleteEmployee(id: number) {
  //   const token = this.cookieService.get('token');
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  // }


  // updateEmployee
  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, employee);
  }

  



  //getEmployee by ID
  // getEmployeeById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/${id}`);
  // }
  getEmployeeById(id: number) {
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }
  
}
