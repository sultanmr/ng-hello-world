import { Component } from '@angular/core';

import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-course',
  template: `
  <input (keyup.enter)="onKeyUp()" />

  `,
  styleUrls: ['./course.component.css']
})

export class CourseComponent {

    onKeyUp($event) {

        console.log ("enter was pressed");
    }
}
