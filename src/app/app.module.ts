import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import {SummaryPipe} from './summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
