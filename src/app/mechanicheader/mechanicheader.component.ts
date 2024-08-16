import { Component } from '@angular/core';

@Component({
  selector: 'app-mechanicheader',
  templateUrl: './mechanicheader.component.html',
  styleUrls: ['./mechanicheader.component.scss']
})
export class MechanicheaderComponent {
  isActive = false;

  toggleNavbar() {
    this.isActive = !this.isActive;
  }
}
