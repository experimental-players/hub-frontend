import { GetterTree, MutationTree, ActionTree } from 'vuex'
import Project from '@/models/Project'
import 'tapi.js/dist/extensions'

export const state = () => ({
  list: [] as Project[]
})

export type ProjectsState = ReturnType<typeof state>

export const getters: GetterTree<ProjectsState, ProjectsState> = {
  everyProject: state => state.list
}

export const mutations: MutationTree<ProjectsState> = {
  SAVE_PROJECTS (state, newProjects: any) {
    state.list = (newProjects.content as any[]).map(project => new Project().fromJSON(project));
  }
}

// NOTE Only use mutations here
export const actions: ActionTree<ProjectsState, ProjectsState> = {
  async pull (context) {
    const projects = await this.$axios.$get('project/findAll');
    context.commit('SAVE_PROJECTS', projects);
  }
}
