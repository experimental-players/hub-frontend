import Link from '@/models/Link';
import BaseResource from '@/models/base/BaseResource';

export default class Category extends BaseResource {
  constructor () {
    super();

    this.build
      .alias('fullname', 'title')
      .alias('codename', 'code')
  }

  protected override setPageLink () {
    return new Link('View', `/categories/${this.id}`);
  }
}
