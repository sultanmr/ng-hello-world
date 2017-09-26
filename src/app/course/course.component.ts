import { Component } from '@angular/core';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  template: `
  <input (keyup.enter)="onKeyUp1($event)" />
  <input #email (keyup.enter)="onKeyUp2(email.value)" />
  `,
  styleUrls: ['./course.component.css']
})

export class CourseComponent {

  onKeyUp1($event) {

    console.log($event.target.value);
  }

  onKeyUp2(val) {

    console.log(val);
  }
}
