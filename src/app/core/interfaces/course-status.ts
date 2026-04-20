export const COURSE_STATUS = {
  FINALIZADO: 'Finalizado',
  EN_CURSO: 'En Curso',
  PROXIMAMENTE: 'Próximamente',
} as const;

export type CourseStatus = (typeof COURSE_STATUS)[keyof typeof COURSE_STATUS];
