import React, { useRef, useState } from "react";
import { Vector2 } from "../../../Shared/Vector2";

// TODO: Convert this into a generic module
// TODO: Make asynchronous to prevent blocking the main thread
// TODO: Currently rendering lines twice... need to fix that

const density = 3;
const hardMaxParticles = 150;
const minSpeed = 0.4;
const maxSpeed = 1;
const minRadius = 1;
const maxRadius = 5;
const maxLineDist = Math.pow(150, 2);
const maxLineWidth = 1;
const margin = 0.1;
const refreshRate = 15;
const mousePushDist = 100;
const mousePushStr = 20;
const pingPushStr = 5;
const pingRadius = 150;
const pingTimeout = 100;
const pingSpeed = 3;
const pingLineWidth = 3;
const particleColor = "#71D5FF";

function createParticle(canvas, createOnBorder) {
  let position = new Vector2(Math.random() * canvas.width, Math.random() * canvas.height);
  let direction = new Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1);
  direction.normalize();

  // pin particle against a side if creating on the border
  if (createOnBorder) {
    let side = Math.random() * 4;
    let margin_x = canvas.width * margin;
    let margin_y = canvas.height * margin;

    if (side < 1) {
      position.x = -margin_x;
      if (direction.x < 0) direction.x *= -1;
    }
    else if (side < 2) {
      position.x = canvas.width + margin_x;
      if (direction.x > 0) direction.x *= -1;
    }
    else if (side < 3) {
      position.y = -margin_y;
      if (direction.y < 0) direction.y *= -1;
    }
    else {
      position.y = canvas.height + margin_y;
      if (direction.x > 0) direction.y *= -1;
    }
  }

  let speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
  let velocity = direction.multiply(speed);
  let radius = Math.random() * (maxRadius - minRadius) + minRadius;

  let particle = {
    position: position,
    velocity: velocity,
    radius: radius,
    color: particleColor,
  };

  return particle;
}

function drawParticle(ctx, particle) {
  if (particle.position.x < 0 ||
    particle.position.x > ctx.canvas.width ||
    particle.position.y < 0 ||
    particle.position.y > ctx.canvas.height) {
    return;
  }

  ctx.beginPath();
  ctx.fillStyle = particle.color;
  ctx.arc(
    particle.position.x,
    particle.position.y,
    particle.radius, 0, 2 * Math.PI);
  ctx.fill();
}

function drawLines(ctx, particle, particles) {
  for (let i = 0; i < particles.length; i++) {
    let dist = particle.position.sqrDistance(particles[i].position);

    if (dist < maxLineDist) {
      ctx.beginPath();
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1 - (maxLineWidth * (dist / maxLineDist));
      ctx.moveTo(particle.position.x, particle.position.y);
      ctx.lineTo(particles[i].position.x, particles[i].position.y);
      ctx.stroke();
    }
  }
}

function pushParticleMouse(particle, ci) {
  if (!ci.mouseInCanvas) return;

  let dist = ci.mousePos.distance(particle.position);

  if (dist < mousePushDist) {
    let dir = particle.position.subtractVec(ci.mousePos);
    dir.normalize();
    let pushStr = Math.pow(1 - (dist / mousePushDist), 2) * mousePushStr;
    particle.position = particle.position.addVec(dir.multiply(pushStr));
  }
}

function createPing(posX, posY, timeout, radius, speed, lineWidth) {
  let ping = {
    position: new Vector2(posX, posY),
    color: particleColor,
    endTick: timeout,
    currTick: 0,
    radius: radius,
    speed: speed,
    lineWidth: lineWidth
  };

  return ping;
}

function updatePing(ctx, ping) {
  let str = (ping.currTick / ping.endTick);
  let radius = ping.radius * str;
  let lineWidth = ping.lineWidth * (1 - str );
  ping.currTick += ping.speed;

  ctx.beginPath();
  ctx.strokeStyle = ping.color;
  ctx.lineWidth = lineWidth;
  ctx.arc(
    ping.position.x,
    ping.position.y,
    radius, 0, 2 * Math.PI);
  ctx.stroke();
}

function pushParticlePings(particle, pings) {
  for (let i = 0; i < pings.length; i++) {
    let currPingRadius = pings[i].radius * (pings[i].currTick / pings[i].endTick);
    let dist = particle.position.distance(pings[i].position);
    let distToRadius = currPingRadius - dist;

    if (distToRadius < 20 && distToRadius > 0) {
      let dir = particle.position.subtractVec(pings[i].position);
      dir.normalize();
      particle.position = particle.position.addVec(dir.multiply((pings[i].currTick / pings[i].endTick) * pingPushStr));
    }
  }
}

class canvasInfo {
  constructor(mousePos, particles, mouseInCavnas, pings) {
    this.mousePos = mousePos || new Vector2(0, 0);
    this.particles = particles || [];
    this.mouseInCanvas = mouseInCavnas || false;
    this.pings = pings || [];
  }
}

export default () => {
  const canvasRef = useRef(null);
  const [ci, setCi] = useState(new canvasInfo());
  let particles = ci.particles;
  const mousePos = ci.mousePos;
  const pings = ci.pings;
  let mouseInCanvas = ci.mouseInCanvas;

  // TODO: Convert this into a shared utils method
  function updateMousePos(mouseInfo) {
    let [posX, posY] = [mouseInfo.clientX, mouseInfo.clientY];
    // could use mouse event instead
    let rect = canvasRef.current.getBoundingClientRect();

    mousePos.x = posX - rect.x;
    mousePos.y = posY - rect.y;
  }

  function onMouseMove(moveInfo) {
    updateMousePos(moveInfo);
  }

  function onMouseEnter() {
    mouseInCanvas = true;
  }

  function onMouseLeave() {
    mouseInCanvas = false;
  }

  function onClick(clickInfo) {
    updateMousePos(clickInfo);
    pings.push(createPing(mousePos.x, mousePos.y, pingTimeout, pingRadius, pingSpeed, pingLineWidth));
  }

  function updateCanvas() {
    if (!canvasRef.current) 
      return;

    const ctx = canvasRef.current.getContext('2d');
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    // don't continue rendering if the canvas isn't visible. Better performance if this was tied to 
    // an intersection observer event, but this is fine for now.
    if (Math.abs(canvasRef.current.getBoundingClientRect().y) > height) {
      setCi(new canvasInfo(ci.position, ci.particles, ci.mouseInCanvas, ci.pings));
      return;
    }

    ctx.clearRect(0, 0, width, height);
    const area = width * height;
    // say a particle can take up 200x200 on screen, this is its density
    const particleDensity = (200 * 200) / density;
    let maxParticles = Math.min(Math.floor(area / particleDensity), hardMaxParticles);
    const numParticlesToAdd = maxParticles - particles.length;

    // create new paticles if none exist
    for (let i = 0; i < numParticlesToAdd; i++) {
      particles.push(createParticle(ctx.canvas, false));
    }

    // remove particles if there are too many (after window resize)
    if (maxParticles < particles.length) {
      particles = particles.slice(0, maxParticles);
    }

    // update pings
    for (let i = 0; i < pings.length; i++) {
      updatePing(ctx, pings[i]);
    }

    for (let i = 0; i < particles.length; i++) {
      // push particle with mouse
      pushParticleMouse(particles[i], ci);
      // push particle with pings
      pushParticlePings(particles[i], pings);
      // move particles
      particles[i].position = particles[i].position.addVec(particles[i].velocity);
      // draw particles
      drawParticle(ctx, particles[i]);
      // draw lines
      drawLines(ctx, particles[i], particles);
    }

    let margin_x = width * margin;
    let margin_y = height * margin;

    // filter out particles out of range
    let goodParticles = particles.filter(particle =>
      particle.position.x < width + margin_x &&
      particle.position.x > -margin_x &&
      particle.position.y < height + margin_y &&
      particle.position.y > -margin_y
    );

    let numGoodParticles = goodParticles.length;

    // create new particles that spawn on the border
    for (let i = 0; i < maxParticles - numGoodParticles; i++) {
      goodParticles.push(createParticle(ctx.canvas, true));
    }

    // remove expired pings
    let goodPings = pings.filter( ping => ping.currTick < ping.endTick);
    let newCanvasInfo = new canvasInfo(mousePos, goodParticles, mouseInCanvas, goodPings);

    setCi(newCanvasInfo);
  }

  window.requestAnimationFrame(updateCanvas);

  return (
    <div className="canvas-container" onMouseMove={onMouseMove} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
      <canvas className="landing-page__canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvasRef}
      />
    </div>
  );
}