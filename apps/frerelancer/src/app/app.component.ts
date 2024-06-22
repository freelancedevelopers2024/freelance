import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavComponent } from 'ui-components/src/lib/nav/nav.component';
import { NavButton } from 'ui-components/src/lib/ui-models/nav-button';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frerelancer';

  navButtons: NavButton[] = [
    { name: 'Home', route: '/' },
    { name: 'About Us', route: '/about-us' },
    { name: 'Services', route: '/services' },
    { name: 'Portfolio', route: '/portfolio' },
    { name: 'Contact', route: '/contact' }
  ];
  
}
