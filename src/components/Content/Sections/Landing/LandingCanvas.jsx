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
const mouseConnectDist = Math.pow(200, 2);
const pingPushStr = 10;
const pingRadius = 150;
const pingTimeout = 100;
const pingSpeed = 3;
const pingLineWidth = 3;
const particleColor = "#71D5FF";

// function floatToInt(num) {
//   // With a bitwise or.
//   let rounded = (0.5 + num) | 0;
//   // A double bitwise not.
//   rounded = ~~ (0.5 + num);
//   // Finally, a left bitwise shift.
//   rounded = (0.5 + num) << 0;

//   return rounded;
// }

function createParticle(canvas, createOnBorder) {
  let position = new Vector2(
    Math.random() * canvas.width,
    Math.random() * canvas.height
  );
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
    } else if (side < 2) {
      position.x = canvas.width + margin_x;
      if (direction.x > 0) direction.x *= -1;
    } else if (side < 3) {
      position.y = -margin_y;
      if (direction.y < 0) direction.y *= -1;
    } else {
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
    pushedThisFrame: false
  };

  return particle;
}

function drawParticle(ctx, particle) {
  if (
    particle.position.x < 0 ||
    particle.position.x > ctx.canvas.width ||
    particle.position.y < 0 ||
    particle.position.y > ctx.canvas.height
  ) {
    return;
  }

  ctx.beginPath();
  ctx.fillStyle = particle.color;
  ctx.arc(
    particle.position.x,
    particle.position.y,
    particle.radius,
    0,
    2 * Math.PI
  );
  ctx.fill();
}

// returns the indicies of lines to draw (to and from)
function drawLines(ctx, currParticleIndex, particles) {
  ctx.strokeStyle = particleColor;

  for (let i = currParticleIndex + 1; i < particles.length; i++) {
    const dist = particles[currParticleIndex].position.sqrDistance(
      particles[i].position
    );

    if (dist < maxLineDist) {
      ctx.beginPath();
      ctx.lineWidth = 1 - maxLineWidth * (dist / maxLineDist);
      ctx.moveTo(
        particles[currParticleIndex].position.x,
        particles[currParticleIndex].position.y
      );
      ctx.lineTo(particles[i].position.x, particles[i].position.y);
      ctx.stroke();
    }
  }
}

function connectParticleMouse(ctx, particle, canvasInfo) {
  if (!canvasInfo.mouseInCanvas) return;

  let sqrDist = canvasInfo.mousePos.sqrDistance(particle.position);

  if (sqrDist < mouseConnectDist) {
    ctx.beginPath();
    ctx.strokeStyle = particle.color;
    ctx.lineWidth = 1 - maxLineWidth * (sqrDist / mouseConnectDist);
    ctx.moveTo(particle.position.x, particle.position.y);
    ctx.lineTo(canvasInfo.mousePos.x, canvasInfo.mousePos.y);
    ctx.stroke();
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
  let str = ping.currTick / ping.endTick;
  let radius = ping.radius * str;
  let lineWidth = ping.lineWidth * (1 - str);
  ping.currTick += ping.speed;

  ctx.beginPath();
  ctx.strokeStyle = ping.color;
  ctx.lineWidth = lineWidth;
  ctx.arc(ping.position.x, ping.position.y, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

function pushParticlePings(particle, pings) {
  for (let i = 0; i < pings.length; i++) {
    let currPingRadius =
      pings[i].radius * (pings[i].currTick / pings[i].endTick);
    let dist = particle.position.distance(pings[i].position);
    let distToRadius = currPingRadius - dist;

    if (distToRadius < 20 && distToRadius > 0) {
      particle.pushedThisFrame = true;
      let dir = particle.position.subtractVec(pings[i].position);
      dir.normalize();
      particle.position = particle.position.addVec(
        dir.multiply((1 - pings[i].currTick / pings[i].endTick) * pingPushStr)
      );
    }
  }
}

export default () => {
  const canvasContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasInfo = useRef({
    particles: [],
    pings: [],
    mousePos: new Vector2(0, 0),
    mouseInCanvas: false
  });
  const [canvasDim, setCanvasDim] = useState(new Vector2(0, 0));

  function onMouseEnter() {
    canvasInfo.current.mouseInCanvas = true;
  }

  function onMouseLeave() {
    canvasInfo.current.mouseInCanvas = false;
  }

  // TODO: Convert this into a shared utils method
  function updateMousePos(mouseInfo) {
    let [posX, posY] = [mouseInfo.clientX, mouseInfo.clientY];
    const rect = canvasRef.current.getBoundingClientRect();
    // could use mouse event instead

    canvasInfo.current.mousePos.x = posX - rect.x;
    canvasInfo.current.mousePos.y = posY - rect.y;
  }

  function onMouseMove(moveInfo) {
    updateMousePos(moveInfo);
  }

  function onClick(clickInfo) {
    updateMousePos(clickInfo);
    canvasInfo.current.pings.push(
      createPing(
        canvasInfo.current.mousePos.x,
        canvasInfo.current.mousePos.y,
        pingTimeout,
        pingRadius,
        pingSpeed,
        pingLineWidth
      )
    );
  }

  function onWindowResize() {
    let containerRect = canvasContainerRef.current.getBoundingClientRect();
    setCanvasDim(new Vector2(containerRect.width, containerRect.height));
  }

  React.useEffect(() => {
    let requestId;
    let containerRect = canvasContainerRef.current.getBoundingClientRect();

    if (
      canvasDim.x !== containerRect.width ||
      canvasDim.y !== containerRect.height
    ) {
      onWindowResize();
      return;
    }

    window.addEventListener("resize", onWindowResize);

    function updateCanvas() {
      if (!canvasRef.current) return;

      const ctx = canvasRef.current.getContext("2d");
      const width = ctx.canvas.width;
      const height = ctx.canvas.height;

      ctx.clearRect(0, 0, width, height);
      const area = width * height;
      // say a particle can take up 200x200 on screen, this is its density
      const particleDensity = (200 * 200) / density;
      let maxParticles = Math.min(
        Math.floor(area / particleDensity),
        hardMaxParticles
      );
      const numParticlesToAdd =
        maxParticles - canvasInfo.current.particles.length;

      // create new paticles if none exist
      for (let i = 0; i < numParticlesToAdd; i++) {
        canvasInfo.current.particles.push(createParticle(ctx.canvas, false));
      }

      // remove particles if there are too many (after window resize)
      if (maxParticles < canvasInfo.current.particles.length) {
        canvasInfo.current.particles = canvasInfo.current.particles.slice(
          0,
          maxParticles
        );
      }

      // update pings
      for (let i = 0; i < canvasInfo.current.pings.length; i++) {
        updatePing(ctx, canvasInfo.current.pings[i]);
      }

      for (let i = 0; i < canvasInfo.current.particles.length; i++) {
        // connect particle with mouse
        connectParticleMouse(
          ctx,
          canvasInfo.current.particles[i],
          canvasInfo.current
        );
        // push particle with pings
        pushParticlePings(
          canvasInfo.current.particles[i],
          canvasInfo.current.pings
        );
        // move particles
        if (canvasInfo.current.particles[i].pushedThisFrame) {
          canvasInfo.current.particles[i].pushedThisFrame = false;
        } else {
          canvasInfo.current.particles[
            i
          ].position = canvasInfo.current.particles[i].position.addVec(
            canvasInfo.current.particles[i].velocity
          );
        }
        // draw particle
        drawParticle(ctx, canvasInfo.current.particles[i]);

        // draw lines from this particle to other particles nearby
        drawLines(ctx, i, canvasInfo.current.particles);
      }

      let margin_x = width * margin;
      let margin_y = height * margin;

      // filter out particles out of range
      canvasInfo.current.particles = canvasInfo.current.particles.filter(
        particle =>
          particle.position.x < width + margin_x &&
          particle.position.x > -margin_x &&
          particle.position.y < height + margin_y &&
          particle.position.y > -margin_y
      );

      let numGoodParticles = canvasInfo.current.particles.length;

      // create new particles that spawn on the border
      for (let i = 0; i < maxParticles - numGoodParticles; i++) {
        canvasInfo.current.particles.push(createParticle(ctx.canvas, true));
      }

      // remove expired pings
      canvasInfo.current.pings = canvasInfo.current.pings.filter(
        ping => ping.currTick < ping.endTick
      );

      requestId = window.requestAnimationFrame(updateCanvas);
    }

    updateCanvas();

    return () => {
      window.cancelAnimationFrame(requestId);
      window.removeEventListener("resize", onWindowResize);
    };
  });

  return (
    <div
      className="canvas-container"
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      ref={canvasContainerRef}
    >
      <canvas
        className="landing-page__canvas"
        width={canvasDim.x}
        height={canvasDim.y}
        ref={canvasRef}
      />
    </div>
  );
};
