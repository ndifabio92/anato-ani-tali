import { Component } from '@angular/core';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'courses-list',
  imports: [CourseCard],
  templateUrl: './course-list.html',
})
export class CourseList {}
