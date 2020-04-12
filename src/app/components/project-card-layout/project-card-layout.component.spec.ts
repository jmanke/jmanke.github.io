import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardLayoutComponent } from './project-card-layout.component';

describe('ProjectCardLayoutComponent', () => {
  let component: ProjectCardLayoutComponent;
  let fixture: ComponentFixture<ProjectCardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
