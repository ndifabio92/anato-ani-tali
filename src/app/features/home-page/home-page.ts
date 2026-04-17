import { Component, signal } from '@angular/core';
import { Card } from '../../shared/ui/card/card';
import { UpperCasePipe } from '@angular/common';
import { environment } from '../../../environments/environment';

const envs = environment;
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [Card, UpperCasePipe],
  templateUrl: './home-page.html',
})
export default class HomePage {
  title = signal(envs.TITLE);
}
