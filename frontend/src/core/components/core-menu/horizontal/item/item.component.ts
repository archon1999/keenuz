import { Component, Input } from '@angular/core';
import { CoreCommonModule } from '@core/common.module';
import { KeenIconComponent } from '@shared/keen-icon/keen-icon.component';

@Component({
  selector: '[core-menu-horizontal-item]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true,
  imports: [
    CoreCommonModule,
    KeenIconComponent,
  ]
})
export class CoreMenuHorizontalItemComponent {
  @Input()
  item: any;
}
