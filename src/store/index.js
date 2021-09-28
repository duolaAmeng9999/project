import Vue from "vue";
import Vuex from "vuex";
import { getUsers } from "../api/github";
Vue.use(Vuex);

const users = {
  namespaced: true,
  actions: {
    getUserName(context, value) {
      context.commit("GETUSERNAME", value);
    },
    async getUsers(countext) {
      const { items: users } = await getUsers(countext.state.userName);
      countext.commit("GETUSERS", users);
    },
  },
  mutations: {
    GETUSERNAME(state, value) {
      state.userName = value;
    },
    GETUSERS(state, value) {
      state.usersList = value;
    },
  },
  state: {
    userName: "",
    usersList: [],
  },
  getters: {
    users(state) {
      return state.usersList.map((item) => {
        let user = {
          name: item.login,
          avatar: item.avatar_url,
          home: item.html_url,
          ...item,
        };
        /* delete user.login;
        delete user.avatar_url;
        delete user.html_url; */

        return user;
      });
    },
  },
};
export default new Vuex.Store({
  modules: {
    usersAbout: users,
  },
});
