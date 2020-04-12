import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementPusherComponent } from './element-pusher.component';

describe('ElementPusherComponent', () => {
  let component: ElementPusherComponent;
  let fixture: ComponentFixture<ElementPusherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementPusherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementPusherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
