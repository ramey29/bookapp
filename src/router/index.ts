import Vue from "vue";
import VueRouter from "vue-router";
import Book from "../components/Books.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "book",
    component: Book
  }
];

const router = new VueRouter({
  routes
});

export default router;
