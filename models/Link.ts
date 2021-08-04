export default class Link {
  readonly title: string;
  readonly href: string;

  constructor (title: string, href: string) {
    this.title = title;
    this.href = href;
  }
}
