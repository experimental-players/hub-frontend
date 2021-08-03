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

/*
{
          title: 'GitHub',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
          image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
          color: 'black'
        },
*/
