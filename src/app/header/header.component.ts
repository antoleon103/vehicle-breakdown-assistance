import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('0.3s', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('0.3s', style({ opacity: 0, transform: 'scale(0.5)' }))
      ]),
    ]),
  ]
})
export class HeaderComponent {
  isActive = false;

  toggleNavbar() {
    this.isActive = !this.isActive;
  }
}
