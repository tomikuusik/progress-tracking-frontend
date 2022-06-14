export default interface Task {
  id: number;
  course_id: string;
  name: string;
  description: string;
  points: number;
  deadline: number;
  // constructor(
  //   id: number,
  //   course_id: string,
  //   name: string,
  //   description: string,
  //   points: number,
  //   deadline: number
  // ) {
  //   this.id = id;
  //   this.course_id = course_id;
  //   this.name = name;
  //   this.description = description;
  //   this.points = points;
  //   this.deadline = deadline;
  // }
}
