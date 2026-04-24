import { Component, inject } from '@angular/core';
import { CourseService } from '../courses-page/services/course.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { PaymentMethods } from '@app/shared/ui/payment-methods/payment-methods';
import { PlanDetails } from '@app/shared/ui/plan-details/plan-details';
import { CoursesDetailCard } from './courses-detail-card/courses-detail-card';

@Component({
  selector: 'courses-detail-page',
  imports: [PaymentMethods, PlanDetails, CoursesDetailCard],
  templateUrl: './courses-detail-page.html',
})
export default class CoursesDetailPage {
  activateRoute = inject(ActivatedRoute);
  courseService = inject(CourseService);

  slug = this.activateRoute.snapshot.params['slug'];
  course = toSignal(this.courseService.getBySlug(this.slug));
}
