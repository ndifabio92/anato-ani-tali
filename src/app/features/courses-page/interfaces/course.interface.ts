import { Badge } from '@app/core/interfaces/badge.interface';
import { Discount } from '@app/core/interfaces/discount.interface';
import { Payment } from '@app/core/interfaces/payment.interface';
import { Plan } from '@app/core/interfaces/plan.interface';

export const COURSE_TYPE = {
  REGULAR: 'Regular',
  INTENSIVO_PARCIAL: 'Intensivo Parcial',
  INTENSIVO_FINAL: 'Intensivo Final',
  CLASE: 'Clase',
} as const;

export const STUDY_MODALITY = {
  SINCRONICO: 'Sincrónico',
  ASINCRONICO: 'Asincrónico',
};

export type CourseType = (typeof COURSE_TYPE)[keyof typeof COURSE_TYPE];
export type StudyModality = (typeof STUDY_MODALITY)[keyof typeof STUDY_MODALITY];

export interface Course {
  id: number;
  title: string;
  description: string;
  slug: string;
  price?: number;
  startDate: Date;
  endDate: Date;
  badge?: Badge;
  discountsIds?: number[];
  planIds?: number[];
  images?: string[];
  paymentsIds: number[];
  type: CourseType;
  modality: StudyModality;
}

export interface CourseDetail {
  id: number;
  title: string;
  description: string;
  slug: string;
  price?: number;
  startDate: Date;
  endDate: Date;
  badge?: Badge;
  discounts?: Discount[];
  plans?: Plan[];
  images?: string[];
  payments: Payment[];
  type: CourseType;
  modality: StudyModality;
}
