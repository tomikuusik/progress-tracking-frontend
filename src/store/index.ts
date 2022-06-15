import { createStore, Store, storeKey } from "vuex";
import Course from "@/assets/types/Course";
import { ssrContextKey } from "vue";

export default createStore({
  state: {
    courses: [
      {
        id: "1",
        name: "Laniaurius atrococcineus",
        description: "Torus fracture of lower end of unspecified fibula",
        code: "XD123",
        maxpoints: 75,
        gradable: true,
        gainedpoints: 8,
        lostpoints: 4,
      },
      {
        id: "2",
        name: "Odocoileus hemionus",
        description: "Bather struck by powered watercraft, initial encounter",
        code: "XD123",
        maxpoints: 102,
        gradable: true,
        gainedpoints: 2,
        lostpoints: 15,
      },
      {
        id: "3",
        name: "Ninox superciliaris",
        description:
          "Nondisp subtrochnt fx unsp femr, subs for clos fx w nonunion",
        code: "XD123",
        maxpoints: 182,
        gradable: true,
        gainedpoints: 4,
        lostpoints: 4,
      },
      {
        id: "4",
        name: "Dendrohyrax brucel",
        description: "Acute gingivitis, non-plaque induced",
        code: "XD123",
        maxpoints: 155,
        gradable: false,
        gainedpoints: 5,
        lostpoints: 8,
      },
      {
        id: "5",
        name: "Equus burchelli",
        description: "External constriction of unspecified thumb, init encntr",
        code: "XD123",
        maxpoints: 104,
        gradable: true,
        gainedpoints: 18,
        lostpoints: 5,
      },
    ] as Array<Course>,
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
    getActiveCourse(state) {
      return state.activeCourse;
    },
    getCourse(state, code) {
      return state.courses.filter((course) => course.code === code);
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
    addNewCourse(state, course: Course) {
      state.courses.push(course);
    },
    modifyCourse(state, newCourse) {
      state.courses[
        state.courses.findIndex((course) => course.id === newCourse.id)
      ] = newCourse;
    },
    deleteCourse(state, id) {
      const courseid = state.courses.findIndex((course) => course.id === id);
      if (courseid != -1) {
        state.courses.splice(courseid, 1);
      }
    },
  },
  actions: {
    courseModificationWindowOpenRequest(context, course) {
      context.commit("openCourseModWindow");
      context.commit("setActiveCourse", course);
    },
    courseAddWindowOpenRequest(context) {
      context.commit("openCourseModWindow");
      context.commit("resetActiveCourse");
    },
    discardCourseModification(context) {
      context.commit("resetActiveCourse");
      context.commit("closeCourseModWindow");
    },
    saveCourseModification(context, course) {
      context.commit("modifyCourse", course);
    },
    saveNewCourse(context, course) {
      context.commit("addNewCourse", course);
    },
    deleteCourse(context, course) {
      context.commit("deleteCourse", course);
    },
  },
  modules: {},
});
