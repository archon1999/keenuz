import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from "@app/modules/home/dashboard/teacher/groups/groups.component";

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule, GroupsComponent],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
}
