import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  standalone:true,
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

}
