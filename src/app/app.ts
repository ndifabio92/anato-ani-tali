import { Component, LOCALE_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }],
})
export class App {
  protected readonly title = signal('anato-ani-tali');
}
