export class Project {
  title: string;
  description: string;
  img: string;
  achievements: string[];
  technologies: string[];
  faIcon: string;
  href: string;

  constructor(fields: {
    title: string;
    description: string;
    img: string;
    href?: string;
    achievements?: string[];
    technologies?: string[];
    faIcon?: string;
  }) {
    this.title = fields.title;
    this.description = fields.description;
    this.img = fields.img;
    this.href = fields.href;
    this.achievements = fields.achievements;
    this.technologies = fields.technologies;
    this.faIcon = fields.faIcon;
  }
}
