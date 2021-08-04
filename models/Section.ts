import Link from '@/models/Link';

export default class Section {
  readonly title: string;
  readonly icon: string;
  readonly image: string;
  readonly color: string;
  readonly link?: Link;

  constructor (title: string, icon: string, image: string, color: string, link?: Link) {
    this.title = title;
    this.icon = icon;
    this.image = image;
    this.color = color;
    this.link = link;
  }
}
