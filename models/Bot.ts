import BaseResource from '@/models/base/BaseResource';
import Link from './Link';

export default class Bot extends BaseResource {
  constructor() {
    super();

    this.build
        .alias('name', 'title')
        .alias('projectUrl', 'link')
  }

  public override get pageLink (): Link {
    return new Link('View', `/bots/${this.id}`);
  }
}
