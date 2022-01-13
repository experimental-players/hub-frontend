import Link from './Link';
import BaseResource from '@/models/base/BaseResource';

export default class Project extends BaseResource {
  constructor () {
    super();

    this.build
      .alias('fullname', 'title')
      .alias('codename', 'code')
      .alias('urlLogo', 'icon')
      .alias('urlBg', 'image')
  }

  protected override generateInternalLinks (): Link[] {
    return [
      new Link('Docs', '#')
    ]
  }
}
