import { Component, OnInit } from '@angular/core';
import { navLinks } from 'src/assets/data/navLinks';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  navLinks = navLinks;

  constructor() { }

  ngOnInit(): void {
  }

}
