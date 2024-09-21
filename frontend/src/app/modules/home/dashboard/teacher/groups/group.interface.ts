import { Student } from "@app/modules/home/dashboard/teacher/groups/student.interface";

export interface Group {
  id: number;
  name: string;
  teacher: number;
  students: Student[];
}
