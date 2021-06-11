export interface Task {
  id: number;
  text: string;
  date: string | Date;
  [key: string]: string | number | Date;
}