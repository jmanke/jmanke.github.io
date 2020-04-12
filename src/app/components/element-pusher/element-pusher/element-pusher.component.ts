import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { GlobalEventsService } from 'src/app/_services/global-events/global-events.service';
import { Vector2 } from 'src/app/utils/Vector2';

@Component({
  selector: 'app-element-pusher',
  templateUrl: './element-pusher.component.html',
  styleUrls: ['./element-pusher.component.scss'],
})
export class ElementPusherComponent implements OnInit, AfterViewInit {
  @Input() force = 1;
  @Input() origin: Vector2;

  @ViewChild('ele') ele: ElementRef;

  prevMousePos: Vector2 = new Vector2(0, 0);
  translation: Vector2 = new Vector2(0, 0);

  constructor(private globalEventsService: GlobalEventsService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.globalEventsService.onMouseMoveSubscribe( (event: MouseEvent) => {
      const currMousePos = new Vector2(event.clientX, event.clientY);
      const dir = currMousePos.subtractVec(this.prevMousePos).divide(1 / (this.force / 100));
      this.translation = dir.addVec(this.translation);
      this.prevMousePos = currMousePos;
    });
  }
}
