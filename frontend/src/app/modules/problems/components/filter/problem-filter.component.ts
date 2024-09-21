import {Component, OnInit} from "@angular/core";
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {NgSelectModule} from "@shared/third-part-modules/ng-select/ng-select.module";
import {KeenIconComponent} from "@shared/keen-icon/keen-icon.component";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";

interface SelectItem {
    id:number,
    name:string
}

@Component({
    selector: 'kep-problem-filter',
    standalone: true,
    imports: [
        ChipsModule,
        DropdownModule,
        NgSelectModule,
        KeenIconComponent,
        NgbTooltipModule
    ],
    templateUrl: './problem-filter.component.html',
    styleUrl: './problem-filter.component.scss',
})


export class ProblemFilterComponent implements OnInit{
    category:SelectItem[];
    status:SelectItem[];
    difficulty:SelectItem[];
    ordering:SelectItem[];

    ngOnInit() {
        this.category = [
            { id: 1, name: 'Dasturlash asoslari' },
            { id: 2, name: 'Algoritmlash' },
            { id: 3, name: 'Frontend' },
            { id: 4, name: 'Backend' },
        ];
        this.status = [
            {id:1, name:"Ko'rilmagan"},
            {id:2, name:"Ishlanmagan"},
            {id:3, name:"Ishlangan"},
        ]
        this.difficulty = [
            {id:1, name:"Oson"},
            {id:2, name:"O'rtacha"},
            {id:3, name:"Qiyin"},
        ]
        this.ordering = [
            {id:1, name:"Dastlab osonlari"},
            {id:2, name:"Dastlab qiyinlari"},
            {id:3, name:"Dastlab yangilari"},
            {id:4, name:"Dastlab eskilari"},
        ]
    }

}
