import { Vector2 } from 'src/app/utils/Vector2';

export interface IPing {
    position: Vector2;
    color: string;
    endTick: number;
    currTick: number;
    radius: number;
    speed: number;
    lineWidth: number;
}