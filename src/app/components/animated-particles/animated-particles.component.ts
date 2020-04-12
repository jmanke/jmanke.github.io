import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener
} from '@angular/core';
import { Vector2 } from 'src/app/utils/Vector2';
import { IParticle } from './models/IParticle';
import { IPing } from './models/IPing';

@Component({
  selector: 'app-animated-particles',
  templateUrl: './animated-particles.component.html',
  styleUrls: ['./animated-particles.component.scss']
})
export class AnimatedParticlesComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  density = 3;
  hardMaxParticles = 150;
  minSpeed = 0.4;
  maxSpeed = 1;
  minRadius = 1;
  maxRadius = 5;
  maxLineDist = Math.pow(150, 2);
  maxLineWidth = 1;
  margin = 0.1;
  mouseConnectDist = Math.pow(200, 2);
  pingPushStr = 10;
  pingRadius = 150;
  pingTimeout = 100;
  pingSpeed = 3;
  pingLineWidth = 3;
  particleColor = '#71D5FF';
  particles: IParticle[] = [];
  pings: IPing[] = [];
  fadeInSpeed = 0.01;

  mouseInCanvas = false;
  mousePos: Vector2 = new Vector2(0, 0);

  animationFrameId: number;

  constructor() {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.fitToParent();

    const intersectionObserverOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.0
    };

    const observer = new IntersectionObserver(intersectionInfo => {
      if (intersectionInfo[0].isIntersecting) {
        this.update();
      } else {
        cancelAnimationFrame(this.animationFrameId);
      }
    }, intersectionObserverOptions);

    observer.observe(this.canvas.nativeElement);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.isViewVisible(event);
  }

  public fitToParent() {
    // ...then set the internal size to match
    this.canvas.nativeElement.width = this.canvas.nativeElement.offsetWidth;
    this.canvas.nativeElement.height = this.canvas.nativeElement.offsetHeight;
  }

  private update() {
    cancelAnimationFrame(this.animationFrameId);
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;
    this.ctx.clearRect(0, 0, width, height);

    const area = width * height;
    // say a particle can take up 200x200 on screen, this is its density
    const particleDensity = (200 * 200) / this.density;
    const maxParticles = Math.min(
      Math.floor(area / particleDensity),
      this.hardMaxParticles
    );
    const numParticlesToAdd = maxParticles - this.particles.length;

    // create new paticles if none exist
    for (let i = 0; i < numParticlesToAdd; i++) {
      this.particles.push(this.createParticle(false));
    }

    // remove particles if there are too many (after window resize)
    if (maxParticles < this.particles.length) {
      this.particles = this.particles.slice(0, maxParticles);
    }

    // update pings
    for (const ping of this.pings) {
      this.updatePing(ping);
    }

    for (let i = 0; i < this.particles.length; i++) {
      // connect particle with mouse
      this.connectParticleMouse(this.particles[i]);
      // push particle with pings
      this.pushParticlePings(this.particles[i]);
      // move particles
      if (this.particles[i].pushedThisFrame) {
        this.particles[i].pushedThisFrame = false;
      } else {
        this.particles[i].position = this.particles[i].position.addVec(
          this.particles[i].velocity
        );
      }
      // draw particle
      this.drawParticle(this.particles[i]);

      // draw lines from this particle to other particles nearby
      this.drawLines(i);

      // increase size factor
      if (this.particles[i].sizeFactor < 1.0) {
        this.particles[i].sizeFactor += this.fadeInSpeed;
        this.particles[i].sizeFactor = Math.min(
          this.particles[i].sizeFactor,
          1.0
        );
      }
    }

    const xMargin = width * this.margin;
    const yMargin = height * this.margin;

    // filter out particles out of range
    this.particles = this.particles.filter(
      particle =>
        particle.position.x < width + xMargin &&
        particle.position.x > -xMargin &&
        particle.position.y < height + yMargin &&
        particle.position.y > -yMargin
    );

    const numGoodParticles = this.particles.length;

    // create new particles
    for (let i = 0; i < maxParticles - numGoodParticles; i++) {
      const newParticle = this.createParticle(true);
      this.particles.push(newParticle);
    }

    // remove expired pings
    this.pings = this.pings.filter(ping => ping.currTick < ping.endTick);

    this.animationFrameId = requestAnimationFrame(this.update.bind(this));
  }

  private isViewVisible(event: any): boolean {
    const rect = this.ctx.canvas.getBoundingClientRect();

    return false;
  }

  private createParticle(fadeIn: boolean): IParticle {
    const canvas = this.ctx.canvas;

    const position = new Vector2(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    );
    const direction = new Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1);
    direction.normalize();

    const speed =
      Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed;
    const velocity = direction.multiply(speed);
    const radius =
      Math.random() * (this.maxRadius - this.minRadius) + this.minRadius;

    const particle: IParticle = {
      position,
      velocity,
      radius,
      color: this.particleColor,
      pushedThisFrame: true,
      sizeFactor: fadeIn ? this.fadeInSpeed : 1.0
    };

    return particle;
  }

  private drawParticle(particle: IParticle) {
    if (
      particle.position.x < 0 ||
      particle.position.x > this.ctx.canvas.width ||
      particle.position.y < 0 ||
      particle.position.y > this.ctx.canvas.height
    ) {
      return;
    }

    this.ctx.beginPath();
    this.ctx.fillStyle = particle.color;
    this.ctx.arc(
      particle.position.x,
      particle.position.y,
      particle.radius * particle.sizeFactor,
      0,
      2 * Math.PI
    );
    this.ctx.fill();
  }

  private drawLines(currParticleIndex: number) {
    this.ctx.strokeStyle = this.particleColor;

    for (let i = currParticleIndex + 1; i < this.particles.length; i++) {
      const dist = this.particles[currParticleIndex].position.sqrDistance(
        this.particles[i].position
      );

      if (dist < this.maxLineDist) {
        const lineWidthScale = Math.min(
          this.particles[currParticleIndex].sizeFactor,
          this.particles[i].sizeFactor
        );

        this.ctx.beginPath();
        this.ctx.lineWidth =
          (1 - this.maxLineWidth * (dist / this.maxLineDist)) * lineWidthScale;
        this.ctx.moveTo(
          this.particles[currParticleIndex].position.x,
          this.particles[currParticleIndex].position.y
        );
        this.ctx.lineTo(
          this.particles[i].position.x,
          this.particles[i].position.y
        );
        this.ctx.stroke();
      }
    }
  }

  private connectParticleMouse(particle: IParticle) {
    if (!this.mouseInCanvas) {
      return;
    }

    const sqrDist = this.mousePos.sqrDistance(particle.position);

    if (sqrDist < this.mouseConnectDist) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = particle.color;
      this.ctx.lineWidth =
        (1 - this.maxLineWidth * (sqrDist / this.mouseConnectDist)) *
        particle.sizeFactor;
      this.ctx.moveTo(particle.position.x, particle.position.y);
      this.ctx.lineTo(this.mousePos.x, this.mousePos.y);
      this.ctx.stroke();
    }
  }

  private createPing(pos: Vector2) {
    const ping: IPing = {
      position: new Vector2(pos.x, pos.y),
      color: this.particleColor,
      endTick: this.pingTimeout,
      currTick: 0,
      radius: this.pingRadius,
      speed: this.pingSpeed,
      lineWidth: this.pingLineWidth
    };

    this.pings.push(ping);
  }

  private updatePing(ping: IPing) {
    const str = ping.currTick / ping.endTick;
    const radius = ping.radius * str;
    const lineWidth = ping.lineWidth * (1 - str);
    ping.currTick += ping.speed;

    this.ctx.beginPath();
    this.ctx.strokeStyle = ping.color;
    this.ctx.lineWidth = lineWidth;
    this.ctx.arc(ping.position.x, ping.position.y, radius, 0, 2 * Math.PI);
    this.ctx.stroke();
  }

  private pushParticlePings(particle: IParticle) {
    for (const ping of this.pings) {
      const currPingRadius = ping.radius * (ping.currTick / ping.endTick);
      const dist = particle.position.distance(ping.position);
      const distToRadius = currPingRadius - dist;

      if (distToRadius < 20 && distToRadius > 0) {
        particle.pushedThisFrame = true;
        const dir = particle.position.subtractVec(ping.position);
        dir.normalize();
        particle.position = particle.position.addVec(
          dir.multiply((1 - ping.currTick / ping.endTick) * this.pingPushStr)
        );
      }
    }
  }

  onMouseEnter() {
    this.mouseInCanvas = true;
  }

  onMouseExit() {
    this.mouseInCanvas = false;
  }

  onMouseMove(event: any) {
    const [posX, posY] = [event.clientX, event.clientY];
    const rect = this.ctx.canvas.getBoundingClientRect();

    this.mousePos.x = posX - rect.x;
    this.mousePos.y = posY - rect.y;
  }

  onClick(event: any) {
    this.createPing(this.mousePos);
  }
}
