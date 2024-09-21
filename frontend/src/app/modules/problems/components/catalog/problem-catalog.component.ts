import {Component} from "@angular/core";
import { CoreCommonModule } from "@core/common.module";

@Component({
    selector: 'kep-problem-catalog',
    standalone: true,
    imports: [
        CoreCommonModule
    ],
    templateUrl: './problem-catalog.component.html',
    styleUrl: './problem-catalog.component.scss',
})

export class ProblemCatalogComponent {

}
