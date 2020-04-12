import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntersectionObserverService {
  constructor() {}

  watchIntersection(
    callback: (
      entries: IntersectionObserverEntry[],
      intersectionObserver: IntersectionObserver
    ) => void,
    options: IntersectionObserverInit,
    target: Element
  ) {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
  }

  // gets called only once when intersection occurs.
  singleUseIntersect(
    callback: () => void,
    options: IntersectionObserverInit,
    target: Element
  ) {
    const cb = (
      entries: IntersectionObserverEntry[],
      intersectionObserver: IntersectionObserver
    ) => {
      let intersected = false;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          intersected = true;
        }
      });
      if (intersected) {
        intersectionObserver.disconnect();
      }
    };

    this.watchIntersection(cb, options, target);
  }
}
