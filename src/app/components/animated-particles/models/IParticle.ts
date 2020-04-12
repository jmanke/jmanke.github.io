import { Vector2 } from 'src/app/utils/Vector2';

export interface IParticle {
  position: Vector2;
  velocity: Vector2;
  radius: number;
  color: string;
  pushedThisFrame: boolean;
  sizeFactor: number;
}
