import { BuildableResource, Properties } from 'tapi.js';

import Link from '@/models/Link';

@Properties.Resource
export default class Category extends BuildableResource {
  public id: string = '';

  @Properties.Alias('codename')
  public code: string = '';

  @Properties.Alias('fullname')
  public title: string = '';

  public description: string = '';

  public icon: string = '';
  public image: string = '';

  @Properties.Transform((c: string) => '#' + c)
  public color: string = '';

  public link?: Link = undefined;
}
