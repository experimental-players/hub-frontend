import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

import Project from '~/models/Project';

@Module({
  name: 'projects',
  stateFactory: true,
  namespaced: true
})
class ProjectsModule extends VuexModule {
  private projects: Project[] = [];

  get projects() {
    return this.projects
  }
}
