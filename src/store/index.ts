import Vue from "vue";
import Vuex from "vuex";

//Modules
import BooksMod from "./modules/books";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  modules: {
    BooksMod
  }
});
