import BaseResource from '@/models/base/BaseResource';

export default class Category extends BaseResource {
  public icon: string = '';
  public image: string = '';

  constructor() {
    super();

    this.build
        .alias('fullname', 'title')
        .alias('codename', 'code')
  }
}
