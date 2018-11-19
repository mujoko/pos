import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Array<any>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAll().subscribe(data => {
      this.employees = data;
    });

  }

}
