import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreCommonModule } from 'core/common.module';

import { FooterComponent } from 'app/layout/components/footer/footer.component';
import { ScrollTopComponent } from 'app/layout/components/footer/scroll-to-top/scroll-top.component';
import { KeenIconComponent } from '@shared/keen-icon/keen-icon.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FooterComponent, ScrollTopComponent],
  imports: [RouterModule, CoreCommonModule, KeenIconComponent, NgbTooltipModule],
  exports: [FooterComponent]
})
export class FooterModule {}
