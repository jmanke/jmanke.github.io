import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-writer[text]',
  templateUrl: './type-writer.component.html',
  styleUrls: ['./type-writer.component.scss']
})
export class TypeWriterComponent implements OnInit {
  @Input() text: string;
  @Input() minTypeDelay = 0.1;
  @Input() maxTypeDelay = 0.2;

  index = 0;
  displayText = '';

  constructor() {}

  ngOnInit(): void {
    this.startTyping();
  }

  getRandomTime() {
    return (
      (Math.random() * (this.maxTypeDelay - this.minTypeDelay) +
        this.minTypeDelay) *
      1000
    );
  }

  updateTextIndex() {
    this.index++;
    this.displayText = this.text.slice(0, this.index);

    if (this.index < this.text.length) {
      setTimeout(() => this.updateTextIndex(), this.getRandomTime());
    }
  }

  startTyping() {
    this.updateTextIndex();
  }
}
