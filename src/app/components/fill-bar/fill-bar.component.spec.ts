import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBarComponent } from './fill-bar.component';

describe('FillBarComponent', () => {
  let component: FillBarComponent;
  let fixture: ComponentFixture<FillBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
