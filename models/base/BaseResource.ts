import { BuildableResource, Properties } from 'tapi.js';
import Link from '@/models/Link';
import { fixColorString } from '@/helpers/colors';

@Properties.Resource
export default class BaseResource extends BuildableResource {
    public id: string = '';

    public title: string = '';

    public code: string = '';

    public description: string = '';

    public icon: string = '';

    public image: string = '';

    @Properties.Transform(fixColorString, (c: string) => c.replace('#', ''))
    public color: string = '';

    @Properties.Transform(url => new Link('Project URL', url), (link?: Link) => link ? link.href : '')
    public link?: Link = undefined;

    @Properties.Ignore
    readonly pageLink?: Link = undefined;

    public constructor () {
      super();

      this.pageLink = this.setPageLink();
    }

    protected setPageLink (): Link|undefined {
      return new Link('View', `/resources/${this.id}`);
    }
}
