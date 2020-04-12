import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-project-card-layout',
  templateUrl: './project-card-layout.component.html',
  styleUrls: ['./project-card-layout.component.scss']
})
export class ProjectCardLayoutComponent implements OnInit {
  @Input() projects: Project[];

  constructor() { }

  ngOnInit(): void {
  }

}
