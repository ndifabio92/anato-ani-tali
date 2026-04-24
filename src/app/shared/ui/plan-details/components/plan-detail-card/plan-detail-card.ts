import { DecimalPipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { Plan } from '@app/core/interfaces/plan.interface';
import { environment } from '@env/environment';

const envs = environment;
@Component({
  selector: 'plan-detail-card',
  imports: [DecimalPipe],
  templateUrl: './plan-detail-card.html',
})
export class PlanDetailCard {
  plan = input.required<Plan>();
  instagram = signal(envs?.INSTAGRAM ?? '');
}
