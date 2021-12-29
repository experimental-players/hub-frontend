import BaseResource from '@/models/base/BaseResource';
import Link from './Link';

export default class Bot extends BaseResource {
  constructor() {
    super();

    this.build
        .alias('name', 'title')
        .alias('projectUrl', 'link')
  }

  protected override getPageLink (identifier: string): Link {
    return new Link('View', `/section/${identifier}`);
  }
}
