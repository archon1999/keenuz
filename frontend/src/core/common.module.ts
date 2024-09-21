import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDirectivesModule } from '@shared/directives/directives.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { KeenIconComponent } from '@shared/keen-icon/keen-icon.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDirectivesModule,
    TranslateModule,
    RouterModule,
    KeenIconComponent,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDirectivesModule,
    TranslateModule,
    RouterModule,
    KeenIconComponent,
  ]
})
export class CoreCommonModule {}
