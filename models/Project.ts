import { Properties } from 'tapi.js';
import Link from './Link';
import BaseResource from '@/models/base/BaseResource';

export default class Project extends BaseResource {
  constructor () {
    super();

    this.build
      .alias('fullname', 'title')
      .alias('codename', 'code')
  }

  public override get pageLink (): Link {
    return new Link('View', `/projects/${this.id}`);
  }
}
