import { BuildableResource, Properties } from 'tapi.js';
import Link from '@/models/Link';
import { fixColorString } from '@/helpers/colors';

@Properties.Resource
export default class Bot extends BuildableResource {
  public id: string = '';

  @Properties.Alias('name')
  public title: string = '';

  public description: string = '';

  @Properties.Transform(fixColorString, (c: string) => c.replace('#', ''))
  public color: string = '';

  @Properties.Alias('projectUrl')
  @Properties.Transform(url => new Link('Project URL', url), (link: Link) => link.href)
  public link?: Link = undefined;
}
