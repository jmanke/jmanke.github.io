import { Component, OnInit, Input } from '@angular/core';
import { ITimelineEvent } from '../../models/ITimelineEvent';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() timelineEvents: ITimelineEvent[] = [];
  hoveringIndex = -1;

  constructor() {}

  ngOnInit(): void {
    if (this.timelineEvents) {
      this.timelineEvents = this.timelineEvents
        .sort((a: any, b: any) => a.date - b.date)
        .reverse();
    }
  }

  onTimelineItemMouseEnter(index: number) {
    this.hoveringIndex = index;
  }

  onTimelineItemMouseLeave() {
    this.hoveringIndex = -1;
  }
}
