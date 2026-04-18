import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [
    // {
    //   id: 1,
    //   title: 'Curso de Locomotor',
    //   price: 120.0,
    // },
  ];
}
