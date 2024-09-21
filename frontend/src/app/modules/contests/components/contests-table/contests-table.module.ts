import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContestsTableComponent } from './contests-table.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreDirectivesModule } from '@shared/directives/directives.module';
import { CountUpModule } from 'ngx-countup';
import { KeenIconComponent } from "@shared/keen-icon/keen-icon.component";

@NgModule({
  declarations: [
    ContestsTableComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
    NgbPopoverModule,
    CoreDirectivesModule,
    CountUpModule,
    KeenIconComponent,
  ],
  exports: [
    ContestsTableComponent,
  ]
})
export class ContestsTableModule {}
