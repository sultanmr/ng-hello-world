import { Component } from '@angular/core';

import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-course',
  template: `
  <h2 [textContent]="title"></h2>
  <img [src]="imageUrl"/>
  <table>
  <tr>
  <td [attr.colspan]="colspan">
  </td>
  </tr>
  </table>
  <button class="btn btn-primary" [class.active]="isActive">Class Binding</button>
  <button [style.backgroundColor]="bkColor">Style Binding</button>
  <div (click)="onDivClicked()">
  <button (click)="onEvent($event)">Event Binding</button>
  </div>
  `,
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  title = "list of courses";
  imageUrl = "http://lorempixel.com/400/200"
  colspan = 2;  
  isActive = true;
bkColor = '#ff0000';

  onDivClicked() {
    console.log("div was clicked");
  }

onEvent ($event) {
    $event.stopPropagation();//stops event bubbling
    console.log ("button was clicked", $event);
  }
}
