import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-cards-list',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
  ],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css',
})
export class CardsListComponent {

  @Input() items: any[] = [];
  
  @Input() images: boolean = false;
  
  @Input() gridCols: number = 3; // Añadir esta línea

  nextImage(item: any): void {
    if (item.currentImage === undefined) {
      item.currentImage = 0;
    }
    item.currentImage = (item.currentImage + 1) % item.images.length;
  }

  prevImage(item: any): void {
    if (item.currentImage === undefined) {
      item.currentImage = 0;
    }
    item.currentImage = (item.currentImage - 1 + item.images.length) % item.images.length;
  }
}
