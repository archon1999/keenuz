import { Component, inject, Input } from '@angular/core';
import { CommonModule, DatePipe, formatDate } from '@angular/common';
import { Student } from "@app/modules/home/dashboard/teacher/groups/student.interface";
import { BaseLoadComponent } from "@app/common/classes/base-load.component";
import { StudentResult } from "@app/modules/home/dashboard/teacher/groups/group/student-card/student-result.interface";
import { Observable } from "rxjs";
import { Group } from "@app/modules/home/dashboard/teacher/groups/group.interface";
import { SpinnerModule } from "primeng/spinner";
import { SpinnerComponent } from "@app/common/classes/spinner/spinner.component";
import { CalendarModule } from "primeng/calendar";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CommonModule, SpinnerModule, SpinnerComponent, CalendarModule, NgbTooltipModule],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.scss'
})
export class StudentCardComponent extends BaseLoadComponent<StudentResult>{
  @Input() student: Student;
  @Input() group: Group;



  getData(): Observable<StudentResult> | null {
    return this.api.get(`groups/${this.group.id}/students/${this.student.id}/results`);
  }
  getResults({ year, month, day }) {
    month ++;
    const date = `${year}-${month < 10 ? '0': ''}${month}-${day < 10 ? '0': ''}${day}`;
    return this.data.results.find(result => result.date === date);
  }
  getBgColor(date) {
    const result = this.getResults(date);
    if (!result) return '';
    switch (result.status) {
      case 1:
        return 'bg-success text-white';
      case 2:
        return 'bg-warning text-white';
      case 3:
        return 'bg-danger text-white';
      case 4:
        return 'bg-dark text-white';
      case 5:
        return 'bg-secondary text-white';
    }
  }
  getTooltip(date): string {
    const result = this.getResults(date);
    if (!result) return '';
    return this.translateService.instant("Status" + String(result.status));
  }
}
