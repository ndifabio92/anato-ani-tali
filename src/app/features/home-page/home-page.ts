import { Component } from '@angular/core';
import { Card } from '../../shared/ui/card/card';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [Card],
  templateUrl: './home-page.html',
})
export default class HomePage {}
