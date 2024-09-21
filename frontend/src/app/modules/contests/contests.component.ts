import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeader } from "@layout/components/content-header/content-header.component";
import { KeenIconComponent } from "@shared/keen-icon/keen-icon.component";
import { CoreCommonModule } from "@core/common.module";
import { BaseLoadComponent } from "@app/common/classes/base-load.component";
import { Contest } from "@app/modules/contests/interfaces/contest";
import { Observable } from "rxjs";
import { BaseTablePageComponent } from "@app/common/classes/base-table-page.component";
import { PageResult } from "@app/common/classes/page-result";
import { ContestsTableModule } from "@app/modules/contests/components/contests-table/contests-table.module";
import { SpinnerComponent } from "@app/common/classes/spinner/spinner.component";

@Component({
  selector: 'app-contests',
  standalone: true,
  imports: [CommonModule, KeenIconComponent, CoreCommonModule, ContestsTableModule, SpinnerComponent],
  templateUrl: './contests.component.html',
  styleUrl: './contests.component.scss'
})
export class ContestsComponent extends BaseTablePageComponent<Contest> {
  getPage(): Observable<PageResult<Contest>> | null {
    return this.api.get('contests');
  }

  protected getContentHeader(): ContentHeader {
    return {
      headerTitle: 'Menu.Contests',
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
}
