import BaseResource from '@/models/base/BaseResource';
import Link from './Link';

export default class Category extends BaseResource {
  constructor() {
    super();

    this.build
        .alias('fullname', 'title')
        .alias('codename', 'code')
  }
  
  public override get pageLink (): Link {
    return new Link('View', `/categories/${this.id}`);
  }
}
