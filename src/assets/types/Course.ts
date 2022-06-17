export default interface Course {
  id: string;
  name: string;
  code: string;
  description: string;
  maxpoints: number;
  gradable: boolean;
  gainedpoints: number;
  lostpoints: number;
  goal: number;
  startdate: string;
  enddate: string;
}
