import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { IntersectionObserverService } from 'src/app/_services/intersection-observer/intersection-observer.service';

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.scss'],
})
export class FadeInComponent
  implements OnInit, AfterViewInit {
  @ViewChild('fadeInElement') fadeInElement: ElementRef;
  @Input() fadeLeft = false;
  @Input() fadeRight = false;
  @Input() fadeTop = false;
  @Input() fadeBottom = false;

  fadeInShow = false;
  fadeDir = '';

  constructor(
    private intersectionObserverService: IntersectionObserverService
  ) {}

  ngOnInit(): void {
    if (this.fadeLeft) {
      this.fadeDir = 'fade-in_left';
    } else if (this.fadeRight) {
      this.fadeDir = 'fade-in_right';
    } else if (this.fadeTop) {
      this.fadeDir = 'fade-in_top';
    } else if (this.fadeBottom) {
      this.fadeDir = 'fade-in_bottom';
    }
  }

  ngAfterViewInit(): void {
    const fadeInCb = () => {
      this.fadeInShow = true;
      this.fadeDir = '';
    };

    this.intersectionObserverService.singleUseIntersect(
      fadeInCb,
      null,
      this.fadeInElement.nativeElement
    );
  }
}
