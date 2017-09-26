import { Component } from '@angular/core';

import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-course',
  template: `
  <h2 [textContent]="title"></h2>
  <img [src]="imageUrl"/>
  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  title = "list of courses";
  imageUrl = "http://lorempixel.com/400/200"
  

  constructor () {

  }

}
