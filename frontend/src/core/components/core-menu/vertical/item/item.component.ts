import { Component, Input } from '@angular/core';

import { CoreMenuItem } from 'core/types';
import { CoreCommonModule } from '@core/common.module';
import { KeenIconComponent } from '@shared/keen-icon/keen-icon.component';

@Component({
  selector: '[core-menu-vertical-item]',
  templateUrl: './item.component.html',
  standalone: true,
  imports: [
    CoreCommonModule,
    KeenIconComponent,
  ]
})
export class CoreMenuVerticalItemComponent {
  @Input()
  item: CoreMenuItem;
}
