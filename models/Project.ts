import { BuildableResource, Properties } from 'tapi.js';

@Properties.Resource
export default class Project extends BuildableResource {
  public id: string = '';

  @Properties.Alias('codename')
  public code: string = '';

  @Properties.Alias('fullname')
  public title: string = '';

  public description: string = '';
}
