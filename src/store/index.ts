import { createStore, Store } from "vuex";
import Course from "@/assets/types/Course";
import { ssrContextKey } from "vue";

export default createStore({
  state: {
    courses: [
      {
        id: 1,
        name: "Laniaurius atrococcineus",
        description: "Torus fracture of lower end of unspecified fibula",
        maxpoints: 75,
        gradable: true,
        gainedpoints: 8,
        lostpoints: 4,
      },
      {
        id: 2,
        name: "Odocoileus hemionus",
        description: "Bather struck by powered watercraft, initial encounter",
        maxpoints: 102,
        gradable: false,
        gainedpoints: 2,
        lostpoints: 15,
      },
      {
        id: 3,
        name: "Ninox superciliaris",
        description:
          "Nondisp subtrochnt fx unsp femr, subs for clos fx w nonunion",
        maxpoints: 182,
        gradable: false,
        gainedpoints: 4,
        lostpoints: 4,
      },
      {
        id: 4,
        name: "Dendrohyrax brucel",
        description: "Acute gingivitis, non-plaque induced",
        maxpoints: 155,
        gradable: false,
        gainedpoints: 5,
        lostpoints: 8,
      },
      {
        id: 5,
        name: "Equus burchelli",
        description: "External constriction of unspecified thumb, init encntr",
        maxpoints: 104,
        gradable: true,
        gainedpoints: 18,
        lostpoints: 5,
      },
    ],
    courseModificationWindowActive: false,
    activeCourse: {},
  },
  getters: {
    getCourses(state) {
      return state.courses;
    },
    getCourseModificationWindowStatus(state): boolean {
      return state.courseModificationWindowActive;
    },
  },
  mutations: {
    closeCourseModWindow(state) {
      state.courseModificationWindowActive = false;
      console.log("Window closed");
    },
    openCourseModWindow(state) {
      state.courseModificationWindowActive = true;
    },
    setActiveCourse(state, course: Course) {
      state.activeCourse = course;
    },
    resetActiveCourse(state) {
      state.activeCourse = {};
    },
  },
  actions: {
    courseModificationWindowCloseRequest(context) {
      console.log("Window close request recieved");
      context.commit("closeCourseModWindow");
    },
    courseModificationWindowOpenRequest(context, course) {
      context.commit("openCourseModWindow");
      context.commit("setActiveCourse", course);
    },
    courseAddWindowOpenRequest(context) {
      context.commit("openCourseModWindow");
      context.commit("resetActiveCourse");
    },
  },
  modules: {},
});
