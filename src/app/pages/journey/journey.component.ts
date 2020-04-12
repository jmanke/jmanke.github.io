import { Component, OnInit } from '@angular/core';
import { timelineEvents } from 'src/assets/data/timelineEvents';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {
  timelineEvents = timelineEvents;

  constructor() {}

  ngOnInit(): void {}
}
