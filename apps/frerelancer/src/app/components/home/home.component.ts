import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from 'ui-components/src/lib/cards-list/cards-list.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cards = [
    {
      title: 'Desarrollo web',
      subtitle: 'Ofrecemos servicios de desarrollo web de primera categoría para crear sitios web atractivos y con capacidad de respuesta.',
    },
    {
      title: 'Desarrollo de aplicaciones',
      subtitle: 'Nuestro equipo destaca en la creación de aplicaciones móviles de alto rendimiento tanto para plataformas Android como iOS.',
    },
    {
      title: 'Diseño UI/UX',
      subtitle: 'Diseñamos interfaces y experiencias fáciles de usar que cautivan y retienen a los usuarios.',
    }
  ];
  gridCols = 3;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.adjustGridCols((event.target as Window).innerWidth);
  }

  ngOnInit() {
    this.adjustGridCols(window.innerWidth);
  }

  adjustGridCols(width: number) {
    if (width < 600) {
      this.gridCols = 1;
    } else if (width < 960) {
      this.gridCols = 2;
    } else {
      this.gridCols = 3;
    }
  }
}
