import { Component, inject, signal } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { CourseService } from '../../services/course.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'courses-list',
  imports: [CourseCard],
  templateUrl: './course-list.html',
})
export class CourseList {
  private courseService = inject(CourseService);
  courses = toSignal(this.courseService.getAll());
}
