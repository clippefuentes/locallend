import { createStore } from 'vuex';

const store = createStore({
  state: {
    count: 0,
    user: null,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setUser(state, user) {
      state.user = user;
    },
    removeUser(state) {
      state.user = null;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    setUser(context, user) {
      context.commit('setUser', user);
    },
    removeUser(context) {
      context.commit('removeUser');
    },
  },
});

export default store;
