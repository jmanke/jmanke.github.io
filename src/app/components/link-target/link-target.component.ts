import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-target',
  templateUrl: './link-target.component.html',
  styleUrls: ['./link-target.component.scss']
})
export class LinkTargetComponent implements OnInit {
  @Input() targetName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
