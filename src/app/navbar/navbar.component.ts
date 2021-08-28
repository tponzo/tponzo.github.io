import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toHome() {
    document.getElementById('home')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  toAbout() {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  toProjects() {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
