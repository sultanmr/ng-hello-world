import { Component } from '@angular/core';


import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  template: `
  <input [value]="email1" (keyup.enter)="email1=$event.target.value; onKeyUp1()" />
  <input [(ngModel)]="email2" (keyup.enter)="onKeyUp2()" />
  `,
  styleUrls: ['./course.component.css']
})

export class CourseComponent {

  email1="me@example.com";
  email2="me2@example.com";
  onKeyUp1() {

    console.log(this.email1);
  }

  onKeyUp2() {
    
        console.log(this.email2);
      }

}
