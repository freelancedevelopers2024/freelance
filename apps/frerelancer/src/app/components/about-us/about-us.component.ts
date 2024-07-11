import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  teamMembers = [
    { name: 'Mohammed', role: 'Full Stack Developer', email: 'cecilie@domain.com', phone: '+123456789', img: 'assets/images/moha.jpg' },
    { name: 'Montacer', role: 'Full Stack Developer', email: 'alexander@domain.com', phone: '+123456789', img: 'assets/images/monta.jpg' },
    { name: 'Toni', role: 'Full Stack Developer', email: 'christian@domain.com', phone: '+123456789', img: 'assets/images/esquiva.jpg' },
    { name: 'Alejandro', role: 'Full Stack Developer', email: 'martin@domain.com', phone: '+123456789', img: 'assets/images/boludo.jpg' },
    { name: 'Pablo', role: 'Full Stack Developer', email: 'idun@domain.com', phone: '+123456789', img: 'assets/images/boludo.jpg' },
  ];
}
