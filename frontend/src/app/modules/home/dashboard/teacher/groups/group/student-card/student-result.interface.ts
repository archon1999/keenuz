import { Student } from "@app/modules/home/dashboard/teacher/groups/student.interface";

export type StudentResultStatus = 1 | 2 | 3 | 4 | 5;

export interface StudentResult {
  student: Student,
  results: Result[],
}

export interface Result {
  status: StudentResultStatus;
  date: string;
}
