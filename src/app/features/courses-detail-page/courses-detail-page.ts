import { Component, inject } from '@angular/core';
import { CourseService } from '../courses-page/services/course.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CourseCard } from '../courses-page/components/course-card/course-card';
import { PaymentMethods } from '@app/shared/ui/payment-methods/payment-methods';

@Component({
  selector: 'courses-detail-page',
  imports: [CourseCard, PaymentMethods],
  templateUrl: './courses-detail-page.html',
})
export default class CoursesDetailPage {
  activateRoute = inject(ActivatedRoute);
  courseService = inject(CourseService);

  slug = this.activateRoute.snapshot.params['slug'];
  course = toSignal(this.courseService.getBySlug(this.slug));
}
