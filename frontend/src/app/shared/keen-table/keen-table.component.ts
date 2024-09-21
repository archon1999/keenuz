import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CoreCommonModule } from '@core/common.module';
import { PaginationComponent } from "@shared/pagination/pagination.component";
import { SpinnerComponent } from "@app/common/classes/spinner/spinner.component";

@Component({
  selector: 'keen-table',
  standalone: true,
  imports: [
    CoreCommonModule,
    PaginationComponent,
    SpinnerComponent
  ],
  templateUrl: './keen-table.component.html',
  styleUrl: './keen-table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class KeenTableComponent {
  @Input() loading: boolean;
  @Input() error: boolean;
  @Input() empty: boolean;
  @Input() cardClass = 'card';
  @Input() tableCardClass = 'beautiful-table';
  @Input() tableClass = 'table-striped';
  @Input() spinnerHeight = '200px';
  @Input() spinnerColor = 'var(--contest-color)';
}
