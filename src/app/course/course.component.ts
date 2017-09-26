import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
  <h2>{{title}}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{course}}
  </ul>
  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "list of courses";
  courses = ["course1", "course2", "course3"];
  constructor() { }

  ngOnInit() {
  }

}
