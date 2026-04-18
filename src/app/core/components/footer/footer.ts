import { Component, signal } from '@angular/core';
import { environment } from '@env/environment';
import { TitleCasePipe } from '@angular/common';

const envs = environment;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './footer.html',
})
export class Footer {
  date = signal(new Date().getFullYear());
  dev = signal(envs?.DEV ?? '');
  devLinkedin = signal(envs?.LINKEDIN ?? '');
  instagram = signal(envs?.INSTAGRAM ?? '');
}
