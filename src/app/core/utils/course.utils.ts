// core/utils/course.utils.ts
import { COURSE_STATUS, CourseStatus } from '@app/core/interfaces/course-status';
import {
  CourseDetail,
  STUDY_MODALITY,
} from '@app/features/courses-page/interfaces/course.interface';

export function getCourseStatus(course: CourseDetail, now = new Date()): CourseStatus {
  const start = new Date(course.startDate);
  const end = new Date(course.endDate);

  if (end < now) return COURSE_STATUS.FINALIZADO;
  if (start <= now) return COURSE_STATUS.EN_CURSO;
  return COURSE_STATUS.PROXIMAMENTE;
}

export function getCourseModality(course: CourseDetail, now = new Date()) {
  const end = new Date(course.endDate);
  return end < now ? STUDY_MODALITY.ASINCRONICO : course.modality;
}

export function getCourseStatusColor(status: CourseStatus): string {
  const colors: Record<CourseStatus, string> = {
    [COURSE_STATUS.FINALIZADO]: 'text-red-700',
    [COURSE_STATUS.EN_CURSO]: 'text-green-700',
    [COURSE_STATUS.PROXIMAMENTE]: 'text-blue-700',
  };
  return colors[status];
}
