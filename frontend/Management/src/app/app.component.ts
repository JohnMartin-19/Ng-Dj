import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  standalone:true,
  styleUrl: './app.component.css',
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppComponent {
  title = 'Management';
}
