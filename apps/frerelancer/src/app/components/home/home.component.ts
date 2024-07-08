import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cards = [
    { title: 'Card 1', content: 'This is the content of card 1.' },
    { title: 'Card 2', content: 'This is the content of card 2.' },
    { title: 'Card 3', content: 'This is the content of card 3.' },
    { title: 'Card 4', content: 'This is the content of card 4.' },
    { title: 'Card 5', content: 'This is the content of card 5.' },
    { title: 'Card 6', content: 'This is the content of card 6.' }
  ];
}
