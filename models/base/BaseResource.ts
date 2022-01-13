import { BuildableResource, Properties } from 'tapi.js';
import Link from '@/models/Link';
import { fixColorString } from '@/helpers/colors';

@Properties.Resource
export default abstract class BaseResource extends BuildableResource {
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
    public pageLinks: Link[] = [];

    public override fromJSON (source: any, strict?: boolean): this {
      const instance = super.fromJSON(source, strict);

      // NOTE This is not the greatest implementation,
      // at initialization there will be at list 2 duplicates
      // duplicates of the object in memory.
      this.id = instance.id;
      this.title = instance.title;
      this.code = instance.code;
      this.description = instance.description;
      this.icon = instance.icon;
      this.image = instance.image;
      this.color = instance.color;
      this.link = instance.link;

      instance.pageLinks = this.generateInternalLinks();

      this.pageLinks = instance.pageLinks;

      return instance;
    }

    protected abstract generateInternalLinks(): Link[];
}
