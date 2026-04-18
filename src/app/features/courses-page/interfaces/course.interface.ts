import { Badge } from '@app/core/interfaces/badge.interface';
import { Discount } from '@app/core/interfaces/discount.interface';

export type CourseStatus = 'upcoming' | 'ongoing' | 'finished';

export interface Course {
  id: number;
  title: string;
  slug: string;
  price: number;
  startDate: Date;
  endDate: Date;
  badges?: Badge[];
  discounts?: Discount[];
  planIds?: number[];
  images?: string[];
}
