import BaseResource from '@/models/base/BaseResource';
import Link from './Link';

export default class Category extends BaseResource {
  constructor() {
    super();

    this.build
        .alias('fullname', 'title')
        .alias('codename', 'code')
  }
  
  protected override getPageLink (identifier: string): Link {
    return new Link('View', `/categories/${identifier}`);
  }
}
