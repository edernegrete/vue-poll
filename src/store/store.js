/* eslint no-param-reassign: */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    current: 1,
    answers: [],
  },
  mutations: {
    SET_VALUE(state, input) {
      state.current = input;
    },
    SET_ANSWER(state, data) {
      data.pollId = state.current;
      state.answers.push(data);
    },
    CLEAN_ANSWER(state) {
      state.answers.length = 0;
    },
  },
  actions: {
    setValue({ commit }, input) {
      commit('SET_VALUE', input);
    },
    setAnswer({ commit }, answer) {
      commit('SET_ANSWER', answer);
    },
    cleanAnswer({ commit }, answer) {
      commit('CLEAN_ANSWER', answer);
    },
  },
  getters: {
    currentPoll: state => state.current,
    getAnswers: state => state.answers,
  },
});
