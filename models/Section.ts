export default class Section {
  readonly title: string;
  readonly icon: string;
  readonly image: string;
  readonly color: string;

  constructor (title: string, icon: string, image: string, color: string) {
    this.title = title;
    this.icon = icon;
    this.image = image;
    this.color = color;
  }
}
