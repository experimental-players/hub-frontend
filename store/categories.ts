import { GetterTree, MutationTree, ActionTree } from 'vuex'
import Category from '@/models/Category'

export const state = () => ({
  list: [] as Category[]
})

export type ProjectsState = ReturnType<typeof state>

export const getters: GetterTree<ProjectsState, ProjectsState> = {
  everyCategory: state => state.list
}

export const mutations: MutationTree<ProjectsState> = {
  SAVE_CATEGORIES (state, newCategory: any) {
    state.list = (newCategory.content as any[]).map(category => {
      return { ...new Category().fromJSON(category) } as Category;
    });
  }
}

// NOTE Only use mutations here
export const actions: ActionTree<ProjectsState, ProjectsState> = {
  async pull (context) {
    const categories = await this.$axios.$get('category/findAll');
    context.commit('SAVE_CATEGORIES', categories);
  }
}
