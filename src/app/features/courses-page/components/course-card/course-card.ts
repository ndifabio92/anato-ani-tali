import { Component, computed, inject, input } from '@angular/core';

import { DatePipe, TitleCasePipe } from '@angular/common';
import { Badge } from '@app/shared/ui/badge/badge';
import { COURSE_STATUS, CourseStatus } from '@app/core/interfaces/course-status';
import { COURSE_TYPE, CourseDetail, STUDY_MODALITY } from '../../interfaces/course.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  getCourseModality,
  getCourseStatus,
  getCourseStatusColor,
} from '@app/core/utils/course.utils';
@Component({
  selector: 'course-card',
  standalone: true,
  imports: [Badge, TitleCasePipe, DatePipe, RouterLink],
  templateUrl: './course-card.html',
})
export class CourseCard {
  activateRoute = inject(ActivatedRoute);
  course = input.required<CourseDetail>();
  readonly courseType = COURSE_TYPE;
  readonly courseStatus = COURSE_STATUS;

  private readonly now = new Date();

  readonly status = computed(() => getCourseStatus(this.course(), this.now));
  readonly modality = computed(() => getCourseModality(this.course(), this.now));
  readonly statusColor = computed(() => getCourseStatusColor(this.status()));
}
