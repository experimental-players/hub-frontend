export default class Link {
  readonly title: string;
  readonly href: any;

  constructor (title: string, href: any) {
    this.title = title;
    this.href = href;
  }
}
