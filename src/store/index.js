import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tab: null,
    items: [
      { tab: 'One', content: '안녕하세요. 홍길동입니다.' },
      { tab: 'Two', content: 'Tab 2 Content' },
    ]
  },
  mutations: {
    updateTab(state, value) {
      state.tab = value;
    }
  },
  actions: {

  },
  modules: {

  },
});
