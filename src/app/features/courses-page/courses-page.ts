import { Component } from '@angular/core';
import { Card } from '../../shared/ui/card/card';
import { CardPricing } from '../../shared/ui/card-pricing/card-pricing';
import { CoursesList } from './courses-list/courses-list';

@Component({
  selector: 'courses-page',
  imports: [Card, CardPricing, CoursesList],
  templateUrl: './courses-page.html',
})
export default class CoursesPage {}
