import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Group } from "@app/modules/home/dashboard/teacher/groups/group.interface";
import {
  AddStudentComponent
} from "@app/modules/home/dashboard/teacher/groups/group/add-student/add-student.component";
import { KeenIconComponent } from "@shared/keen-icon/keen-icon.component";
import { Student } from "@app/modules/home/dashboard/teacher/groups/student.interface";
import {
  StudentCardComponent
} from "@app/modules/home/dashboard/teacher/groups/group/student-card/student-card.component";
import { ModalService } from "@app/common/classes/modal/modal.service";

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule, AddStudentComponent, KeenIconComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent {
  @Input() group: Group;
  modalService = inject(ModalService);

  deleteStudent(studentId: number) {

  }
  showStudent(student: Student) {
    this.modalService.open({
      component: StudentCardComponent,
      componentOptions: { student, group: this.group },
      modalOptions: { size: 'lg'},
      title : 'Student Details'
    });
  }
}
