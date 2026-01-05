import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  sidebarOpen = window.innerWidth > 768;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  protected readonly title = signal('kissnagyzsombiert');

  closeSidebarOnMobile() {
  if (window.innerWidth <= 768) {
    this.sidebarOpen = false;
  }
}
}
