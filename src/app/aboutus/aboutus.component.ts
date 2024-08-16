import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
  team = [
    { name: 'Anto Leon', position: 'CEO', avatar: '/assets/anto.jpg' },
    { name: 'Akash', position: 'CTO', avatar: '/assets/8.jpg' },
    { name: 'Esron', position: 'CTO', avatar: '/assets/8.jpg' },
  ];
}
