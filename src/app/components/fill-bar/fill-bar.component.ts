import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fill-bar',
  templateUrl: './fill-bar.component.html',
  styleUrls: ['./fill-bar.component.scss']
})
export class FillBarComponent implements OnInit {
  @Input() label: string;
  @Input() fill: number;
  @Input() showFill = true;

  constructor() { }

  ngOnInit(): void {
  }

}
