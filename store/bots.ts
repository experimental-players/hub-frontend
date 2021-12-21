import { GetterTree, MutationTree, ActionTree } from 'vuex'
import Bot from '@/models/Bot'

export const state = () => ({
  list: [] as Bot[]
})

export type ProjectsState = ReturnType<typeof state>

export const getters: GetterTree<ProjectsState, ProjectsState> = {
  everyBot: state => state.list
}

export const mutations: MutationTree<ProjectsState> = {
  SAVE_CATEGORIES (state, newBot: any) {
    state.list = (newBot.content as any[]).map(bot => {
      return { ...new Bot().fromJSON(bot) } as Bot;
    });
  }
}

// NOTE Only use mutations here
export const actions: ActionTree<ProjectsState, ProjectsState> = {
  async pull (context) {
    const categories = await this.$axios.$get('bot/findAll');
    context.commit('SAVE_CATEGORIES', categories);
  }
}
