import { Properties } from 'tapi.js';
import BaseResource from '@/models/base/BaseResource';

export default class Project extends BaseResource {
  constructor() {
    super();

    this.build
        .alias('fullname', 'title')
        .alias('codename', 'code')
  }
}
