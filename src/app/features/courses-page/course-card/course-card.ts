import { Component, computed, input } from '@angular/core';
import { COURSE_TYPE, STUDY_MODALITY, CourseDetail } from '../interfaces/course.interface';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Badge } from '@app/shared/ui/badge/badge';
import { COURSE_STATUS, CourseStatus } from '@app/core/interfaces/course-status';
@Component({
  selector: 'course-card',
  standalone: true,
  imports: [Badge, TitleCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './course-card.html',
})
export class CourseCard {
  course = input.required<CourseDetail>();
  readonly courseType = COURSE_TYPE;
  readonly courseStatus = COURSE_STATUS;

  private readonly now = new Date();

  readonly status = computed(() => {
    const start = new Date(this.course().startDate);
    const end = new Date(this.course().endDate);

    if (end < this.now) return COURSE_STATUS.FINALIZADO;

    if (start <= this.now) return COURSE_STATUS.EN_CURSO;
    return COURSE_STATUS.PROXIMAMENTE;
  });

  readonly modality = computed(() => {
    const end = new Date(this.course().endDate);
    return end < this.now ? STUDY_MODALITY.ASINCRONICO : this.course().modality;
  });

  readonly statusColor = computed(() => {
    const colors: Record<CourseStatus, string> = {
      [COURSE_STATUS.FINALIZADO]: 'text-red-700',
      [COURSE_STATUS.EN_CURSO]: 'text-green-700',
      [COURSE_STATUS.PROXIMAMENTE]: 'text-blue-700',
    };
    return colors[this.status()];
  });
}
