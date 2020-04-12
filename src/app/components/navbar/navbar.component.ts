import { Component, Input, OnInit, Inject, HostListener } from '@angular/core';
import { NavItem } from 'src/app/models/NavItem';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() navItems: NavItem[];

  toggleActive = false;
  navbarVisible = true;
  prevScrollpos = window.pageYOffset;

  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const yScroll = window.pageYOffset;
    this.navbarVisible = yScroll <= this.prevScrollpos;
    this.prevScrollpos = yScroll;
  }

  toggle() {
    this.toggleActive = !this.toggleActive;
  }

  toggleOff() {
    this.toggleActive = false;
  }

  refresh() {
    window.location.href = '#';
    document.location.reload();
  }
}
