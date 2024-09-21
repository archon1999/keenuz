import {Component} from "@angular/core";
import {ProblemFilterComponent} from "@app/modules/problems/components/filter/problem-filter.component";
import {ProblemCatalogComponent} from "@app/modules/problems/components/catalog/problem-catalog.component";
import {KeenIconComponent} from "@shared/keen-icon/keen-icon.component";
import {RouterLink} from "@angular/router";
import {Resources} from "@app/resources";
import {ResourceByIdPipe} from "@shared/pipes/resource-by-id.pipe";
import {ContentHeader} from "@layout/components/content-header/content-header.component";
import {ContentHeaderModule} from "@layout/components/content-header/content-header.module";
import {Observable} from "rxjs";
import {PageResult} from "@app/common/classes/page-result";
import {BaseTablePageComponent} from "@app/common/classes/base-table-page.component";
import {Problem} from "@app/modules/problems/problems.interface";
import {GroupComponent} from "@app/modules/home/dashboard/teacher/groups/group/group.component";
import { SpinnerComponent } from "@app/common/classes/spinner/spinner.component";

@Component({
    selector: 'kep-problems',
    standalone: true,
    imports: [
        ProblemFilterComponent,
        ProblemCatalogComponent,
        KeenIconComponent,
        RouterLink,
        ResourceByIdPipe,
        ContentHeaderModule,
        GroupComponent,
        SpinnerComponent
    ],
    templateUrl: './problems.component.html',
    styleUrl: './problems.component.scss'
})

export class ProblemsComponent extends BaseTablePageComponent<Problem>{
    protected getContentHeader(): ContentHeader {
        return {
            headerTitle: 'Masalalar',
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

    getPage(): Observable<PageResult<Problem>> | null {
        return this.api.get('problems')
    }

    public readonly Resources = Resources;
}
