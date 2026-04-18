import { Component, input } from '@angular/core';
import { Badge } from '@app/core/interfaces/badge.interface';
import { Discount } from '@app/core/interfaces/discount.interface';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.html',
})
export class CourseCard {
  badges = input<Badge[]>([]);
  discount = input<Discount[]>([]);
}
