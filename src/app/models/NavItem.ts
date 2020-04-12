export class NavItem {
  title: string;
  faIcon: string;
  href: string;

  constructor(fields: { title: string, faIcon: string, href: string}) {
    this.title = fields.title;
    this.faIcon = fields.faIcon;
    this.href = fields.href;
  }
}
