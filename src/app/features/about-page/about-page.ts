import { Component } from '@angular/core';
interface Teacher {
  alias: string;
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
      alias: 'Tali',
      name: 'Talita Brietzke',
      role: 'Docente de Anatomía',
      initial: 'T',
      bgColor: 'border-primary',
      textColor: 'text-primary-content',
    },
    {
      alias: 'Ani',
      name: 'Anabella Losardo',
      role: 'Docente de Anatomía',
      initial: 'A',
      bgColor: 'border-neutral',
      textColor: 'text-neutral-content',
    },
  ];
}
