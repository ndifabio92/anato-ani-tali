import { Component, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { environment } from '@env/environment';

const envs = environment;
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './home-page.html',
})
export default class HomePage {
  title = signal(envs.TITLE);
}
