import Link from './Link';
import BaseResource from '@/models/base/BaseResource';

export default class Category extends BaseResource {
  constructor () {
    super();

    this.build
      .alias('fullname', 'title')
      .alias('codename', 'code')
  }

  public override get pageLink (): Link {
    return new Link('View', `/categories/${this.id}`);
  }
}
