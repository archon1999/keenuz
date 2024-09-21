import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeenIconComponent } from "@shared/keen-icon/keen-icon.component";

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, KeenIconComponent],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
  add() {

  }
}
