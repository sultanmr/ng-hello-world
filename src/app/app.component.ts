import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses;

  LoadCourses () {
    this.courses = [
      {id:1, name:'course 1'},
      {id:2, name:'course 2'},
      {id:3, name:'course 3'}
    ];
  }

  onAdd() {
    let total = this.courses.length;
    this.courses.push({id: total, name:'course '+total})
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChangeName(course) {
    course.name = course.name+' CHANGED';
  }

  trackCourse (index, course) {
    // using this method to identify courses tracked by id instead of
    // memory reference in order to stop getting again the same id's upon
    // loading from server
    return course ? course.id: undefined;
  }
}