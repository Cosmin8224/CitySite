import { Component } from '@angular/core';

@Component({
  selector: 'app-services-panel',
  templateUrl: './services-panel.component.html',
  styleUrls: ['./services-panel.component.scss']
})
export class ServicesPanelComponent {
  services = [
    { title: 'Travel', description: 'Go on a mountain trip or swiming. We have everything.' },
    { title: 'Travel Arrangements', description: 'Let us do the work. Relax.' },
    { title: 'Our Professional Guide', description: 'We are one of the best.' },
    { title: 'Activities', description: 'You can do things that you do not even imagine.' }
  ];
}
