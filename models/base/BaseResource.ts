import { BuildableResource, Properties } from 'tapi.js';
import Link from '@/models/Link';
import { fixColorString } from '@/helpers/colors';

@Properties.Resource
export default class BaseResource extends BuildableResource {
    public id: string = '';

    public title: string = '';

    public code: string = '';

    public description: string = '';

    @Properties.Transform(fixColorString, (c: string) => c.replace('#', ''))
    public color: string = '';

    @Properties.Transform(url => new Link('Project URL', url), (link: Link) => link.href)
    public link?: Link = undefined;
}