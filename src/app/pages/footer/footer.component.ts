import { Component, OnInit } from '@angular/core';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { navLinks } from 'src/assets/data/navLinks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  navLinks = navLinks;
  faCopyright = faCopyright;

  constructor() {}

  ngOnInit(): void {}
}
