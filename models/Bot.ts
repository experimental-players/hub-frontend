import BaseResource from '@/models/base/BaseResource';

export default class Bot extends BaseResource {
  constructor() {
    super();

    this.build
        .alias('name', 'title')
        .alias('projectUrl', 'link')
  }
}
