import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@app/core/components/footer/footer';
import { Navbar } from '@app/core/components/navbar/navbar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
