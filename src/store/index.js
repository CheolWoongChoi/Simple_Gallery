import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tab: null,
    items: [
      { tab: '메뉴1', type: 'text', content: '안녕하세요. 홍길동입니다.' },
      { tab: '메뉴2', type: 'image', content: 'Tab 2 Content' },
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
