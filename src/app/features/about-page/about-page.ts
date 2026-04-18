import { Component } from '@angular/core';
interface Teacher {
  name: string;
  role: string;
  initial: string;
  bgColor: string;
  textColor: string;
}

@Component({
  selector: 'about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.html',
})
export default class AboutPage {
  teachers: Teacher[] = [
    {
      name: 'Tali',
      role: 'Docente de Anatomía',
      initial: 'T',
      bgColor: 'bg-primary',
      textColor: 'text-primary-content',
    },
    {
      name: 'Ani',
      role: 'Docente de Anatomía',
      initial: 'A',
      bgColor: 'bg-neutral',
      textColor: 'text-neutral-content',
    },
  ];
}
