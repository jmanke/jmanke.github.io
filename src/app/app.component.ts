// require('intersection-observer');

import { Component, OnInit } from '@angular/core';
import { navItems as navItemsSrc } from 'src/assets/data/navItems';
import { navLinks as navLinksSrc } from 'src/assets/data/navLinks';
import { GlobalEventsService } from './_services/global-events/global-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'personal-site';
  navItems = navItemsSrc;
  navLinks = navLinksSrc;

  constructor(private globalEventsService: GlobalEventsService) {}

  ngOnInit(): void {
    this.globalEventsService.init();
  }
}
