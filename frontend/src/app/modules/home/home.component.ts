import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeenIconComponent } from "@shared/keen-icon/keen-icon.component";
import { fadeInRightOnEnterAnimation } from "angular-animations";
import { ContentHeader } from "@layout/components/content-header/content-header.component";
import { ContentHeaderModule } from "@layout/components/content-header/content-header.module";
import { ButtonModule } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";
import { CalendarModule } from "primeng/calendar";
import { TeacherComponent } from "@app/modules/home/dashboard/teacher/teacher.component";
import { AuthService } from "@app/modules/pages/authentication/auth.service";
import { StudentComponent } from "@app/modules/home/dashboard/student/student.component";
import { Role } from "@app/modules/pages/authentication/role.enum";
import { BaseComponent } from "@app/common/classes/base.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    KeenIconComponent,
    ContentHeaderModule,
    ButtonModule,
    InputNumberModule,
    CalendarModule,
    TeacherComponent,
    StudentComponent,
  ],
  animations: [
    fadeInRightOnEnterAnimation(),
  ]
})
export class HomeComponent extends BaseComponent {
  protected getContentHeader(): ContentHeader {
    return {
      headerTitle: 'Menu.Home',
      breadcrumb: {
        links: [
          {
            isLink: true,
            name: 'KEEN.uz',
            link: ''
          }
        ]
      }
    }
  }

  protected readonly Role = Role;
}
