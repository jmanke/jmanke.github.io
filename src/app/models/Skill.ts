export class Skill {
  name: string;
  percent: number;

  constructor(fields: { name: string; percent: number}) {
    this.name = fields.name;
    this.percent = fields.percent;
  }
}
