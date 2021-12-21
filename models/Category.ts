import { BuildableResource, Properties } from 'tapi.js';

import Link from '@/models/Link';
import { fixColorString } from '@/helpers/colors';

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

  @Properties.Transform(fixColorString, (c: string) => c.replace('#', ''))
  public color: string = '';

  public link?: Link = undefined; // TODO Assign this to something
}
