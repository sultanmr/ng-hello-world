import { Component } from '@angular/core';


import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  template: `
  {{course.title | uppercase}} <br/>
  {{course.students | number}} <br/>
  {{course.rating | number:'2.2-2'}} <br/> 
  {{course.price | currency}} <br/>
  {{course.price | currency:'AUD'}} <br/>
  {{course.price | currency:'AUD':true}} <br/>
  {{course.price | currency:'AUD':true:'3.2-2'}} <br/>
  {{course.releaseDate}} <br/>
  {{course.releaseDate | date}} <br/>
  {{course.releaseDate | date:'shortDate'}} <br/>
  `,
  styleUrls: ['./course.component.css']
})

export class CourseComponent {

    course = {
      title: "The Complete Angular Course",
      rating: 4.2342,
      students: 23233,
      price: 190.2334,
      releaseDate: new Date(2016, 3, 1)
    }

}
