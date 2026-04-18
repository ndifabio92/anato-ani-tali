import { Injectable } from '@angular/core';
import { Plan } from '../interfaces/plan.interface';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private plans: Plan[] = [
    {
      id: 1,
      title: 'Plan Básico',
      description: 'Acceso a cursos básicos y contenido exclusivo.',
      includes: [
        '1 encuentro virtual sincrónico semanal para el desarrollo de los temas del trabajo práctico/TP de la semana. Todos los encuentros son grabados y subidos al drive.',
        'Diapositivas de los encuentros.',
        'Videos teóricos cortos disponibles en drive.',
      ],
    },
    {
      id: 2,
      title: 'Plan Premium',
      description: 'Acceso a todos los cursos, contenido exclusivo y soporte personalizado.',
      includes: [
        '2 encuentros virtuales sincrónicos semanales: uno para el desarrollo de los temas del trabajo práctico/TP de la semana y uno para el desarrollo de anatomía aplicada y estudios por imágenes. Todos los encuentros son grabados y subidos al drive.',
        'Diapositivas de los encuentros.',
        'Videos teóricos cortos disponibles en drive.',
      ],
    },
  ];

  getPlans(): Plan[] {
    return this.plans;
  }
}
