import { Component, OnInit } from '@angular/core';
import { projects } from 'src/assets/data/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = projects;

  constructor() { }

  ngOnInit(): void {
  }
}
