import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  faGithub = faGithub;
  faLink = faLink;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  openModal() {
    const modalRef = this.modalService.open(ProjectModalComponent);
    modalRef.componentInstance.project = this.project;
  }
}
