import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AnimatedParticlesComponent } from 'src/app/components/animated-particles/animated-particles.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild(AnimatedParticlesComponent /* #name or Type*/, { static: false })
  animatedParticles: AnimatedParticlesComponent;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.animatedParticles.fitToParent();
  }
}
