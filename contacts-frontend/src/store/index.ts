import type { Contact, Note } from '../types/';
import { createLogger, createStore, useStore as baseUseStore } from 'vuex'
import type { Store } from 'vuex'
import type { InjectionKey } from 'vue';

export interface State {
    contacts: Contact[],
    contact: Contact,
}

import * as actions from './actions'
import * as mutations from './mutations'

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    contacts: [],
    contact: null,
  },
  actions: actions,
  mutations: mutations,
  plugins: [createLogger()]
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}