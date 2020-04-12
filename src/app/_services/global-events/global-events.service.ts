import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalEventsService {
  private mouseOverListeners = [];

  constructor() {}

  init() {
    document.documentElement.addEventListener(
      'mousemove',
      ($event: MouseEvent) => {
        this.mouseOverListeners.forEach((x) => {
          x($event);
        });
      }
    );
  }

  onMouseMoveSubscribe(callback: ($event: MouseEvent) => void) {
    this.mouseOverListeners.push(callback);
  }

  onMouseMoveUnsubscribe(callback: ($event: MouseEvent) => void) {
    this.mouseOverListeners = this.mouseOverListeners.filter(
      (x) => x !== callback
    );
  }
}
