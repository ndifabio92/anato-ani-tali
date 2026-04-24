import { Component, signal } from '@angular/core';
import { environment } from '@env/environment';

const envs = environment;
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.html',
})
export default class HomePage {
  title = signal(envs.TITLE);
}
