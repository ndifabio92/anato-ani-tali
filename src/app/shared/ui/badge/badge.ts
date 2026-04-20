import { Component, computed, input } from '@angular/core';

type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';
type BadgeType = 'primary' | 'secondary' | 'accent' | 'warning' | 'success' | 'error' | 'info';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.html',
})
export class Badge {
  title = input.required<string>();
  size = input.required<BadgeSize>();
  type = input.required<BadgeType>();

  variants = computed(() => `badge-${this.size()} badge-${this.type()}`);
}
