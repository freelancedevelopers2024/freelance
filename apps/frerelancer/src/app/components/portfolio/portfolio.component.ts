import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from 'ui-components/src/lib/cards-list/cards-list.component';
import { MatDivider } from '@angular/material/divider';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, CardsListComponent, MatDivider, MatToolbar],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {

  cards = [
    {
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      images: ['https://www.meetsidekick.com/wp-content/uploads/2022/07/Figma_02.jpg', 'https://s3-alpha.figma.com/hub/file/896723794/37335f37-0135-4868-bd3a-01a364d7c3f5-cover.png', 'https://s3-alpha.figma.com/hub/file/3279080205/577fe8b4-9005-4583-bb53-33ef70a2c7ed-cover.png'],
      currentImage: 0
    },
    {
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      images: ['https://www.meetsidekick.com/wp-content/uploads/2022/07/Figma_02.jpg', 'https://s3-alpha.figma.com/hub/file/896723794/37335f37-0135-4868-bd3a-01a364d7c3f5-cover.png', 'https://s3-alpha.figma.com/hub/file/3279080205/577fe8b4-9005-4583-bb53-33ef70a2c7ed-cover.png'],
      currentImage: 0
    },
    {
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      images: ['https://www.meetsidekick.com/wp-content/uploads/2022/07/Figma_02.jpg', 'https://s3-alpha.figma.com/hub/file/896723794/37335f37-0135-4868-bd3a-01a364d7c3f5-cover.png', 'https://s3-alpha.figma.com/hub/file/3279080205/577fe8b4-9005-4583-bb53-33ef70a2c7ed-cover.png'],
      currentImage: 0
    }
  ];

}
