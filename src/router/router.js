import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/views/Main.vue";
import Cards from "../components/views/Cards.vue";
import Tests from "../components/views/Tests.vue";
import SignUp from "../components/views/SignUp.vue";
import LogIn from "../components/views/LogIn.vue";
import Student from "../components/views/Student.vue";
import TestPage from "../components/views/TestPage.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
    },
    {
      path: "/cards",
      name: "Cards",
      component: Cards,
    },
    {
      path: "/tests",
      name: "Tests",
      component: Tests,
    },
    {
      path: "/login",
      name: "Login",
      component: LogIn,
    },
    {
      path: "/sign",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/student",
      name: "Student",
      component: Student,
    },
    {
      name: "testPage",
      path: "/testPage/:id",
      component: TestPage,
    },
  ],
  history: createWebHistory(),
});

export default router;
