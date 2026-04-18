import { Component } from '@angular/core';
import { CourseList } from './course-list/course-list';

@Component({
  selector: 'courses-page',
  imports: [CourseList],
  templateUrl: './courses-page.html',
})
export default class CoursesPage {}
