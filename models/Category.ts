import BaseResource from '@/models/base/BaseResource';

export default class Category extends BaseResource {
  constructor() {
    super();

    this.build
        .alias('fullname', 'title')
        .alias('codename', 'code')
  }
}
