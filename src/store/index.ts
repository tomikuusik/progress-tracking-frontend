import { createStore, Store, storeKey } from "vuex";
import Course from "@/assets/types/Course";

export default createStore({
  state: {
    courses: [
      {
        id: "1",
        name: "Laniaurius atrococcineus",
        description: "Torus fracture of lower end of unspecified fibula",
        code: "LTAT.05.007",
        maxpoints: 100,
        gradable: true,
        gainedpoints: 40,
        lostpoints: 20,
        startdate: "10102022",
        enddate: "01062022",
        goal: 51,
        gradesystem: [
          { marker: "A", pointrange: 90 },
          { marker: "B", pointrange: 80 },
          { marker: "C", pointrange: 70 },
          { marker: "D", pointrange: 60 },
          { marker: "E", pointrange: 50 },
        ],
      },
      {
        id: "2",
        name: "Odocoileus hemionus",
        description: "Bather struck by powered watercraft, initial encounter",
        code: "LTAT.05.007",
        maxpoints: 100,
        gradable: true,
        gainedpoints: 70,
        lostpoints: 5,
        startdate: "10102022",
        enddate: "01062022",
        goal: 90,
        gradesystem: [
          { marker: "A", pointrange: 90 },
          { marker: "B", pointrange: 80 },
          { marker: "C", pointrange: 70 },
          { marker: "D", pointrange: 60 },
          { marker: "E", pointrange: 50 },
        ],
      },
      {
        id: "3",
        name: "Ninox superciliaris",
        description:
          "Nondisp subtrochnt fx unsp femr, subs for clos fx w nonunion",
        code: "LTAT.05.007",
        maxpoints: 100,
        gradable: true,
        gainedpoints: 70,
        lostpoints: 15,
        startdate: "10102022",
        enddate: "01062022",
        goal: 80,
        gradesystem: [
          { marker: "A", pointrange: 90 },
          { marker: "B", pointrange: 80 },
          { marker: "C", pointrange: 70 },
          { marker: "D", pointrange: 60 },
          { marker: "E", pointrange: 50 },
        ],
      },
      {
        id: "4",
        name: "Dendrohyrax brucel",
        description: "Acute gingivitis, non-plaque induced",
        code: "LTAT.05.007",
        maxpoints: 100,
        gradable: false,
        gainedpoints: 20,
        lostpoints: 20,
        startdate: "10102022",
        enddate: "01062022",
        goal: 70,
        gradesystem: [
          { marker: "A", pointrange: 90 },
          { marker: "B", pointrange: 80 },
          { marker: "C", pointrange: 70 },
          { marker: "D", pointrange: 60 },
          { marker: "E", pointrange: 50 },
        ],
      },
      {
        id: "5",
        name: "Equus burchelli",
        description: "External constriction of unspecified thumb, init encntr",
        code: "LTAT.05.007",
        maxpoints: 100,
        gradable: true,
        gainedpoints: 90,
        lostpoints: 2,
        startdate: "10102022",
        enddate: "01062022",
        goal: 95,
        gradesystem: [
          { marker: "A", pointrange: 90 },
          { marker: "B", pointrange: 80 },
          { marker: "C", pointrange: 70 },
          { marker: "D", pointrange: 60 },
          { marker: "E", pointrange: 50 },
        ],
      },
    ] as unknown as Array<Course>,
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
      const activeCourse = state.activeCourse;
      if (Object.keys(activeCourse).length > 0) {
        return activeCourse;
      }
      if (state.courses.length > 0) {
        return state.courses[0];
      }
      return {};
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
      console.log("Active course is ", course);
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
      // context.commit("resetActiveCourse");
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
