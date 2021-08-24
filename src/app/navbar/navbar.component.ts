import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toAbout() {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  toResume() {
    document.getElementById('resume')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  toExperience() {
    document.getElementById('experience')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  toContact() {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
