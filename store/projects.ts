import { GetterTree } from 'vuex'
import Project from '@/models/Project'

export const state = () => ({
  list: [] as Project[]
})

export type ProjectsState = ReturnType<typeof state>

export const getters: GetterTree<ProjectsState, ProjectsState> = {
  all: state => state.list
}
