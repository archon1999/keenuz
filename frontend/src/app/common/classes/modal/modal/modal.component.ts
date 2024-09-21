import { Component, ComponentRef, Input, OnInit, ViewChild, } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbActiveModal, NgbModalModule, } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { HostDirective } from "@app/common/classes/modal/host.directive";
import { ModalServiceOption } from "@app/common/classes/modal/modal.interface";
import { ModalClose } from "@app/common/classes/modal/modal.enum";
import { KeenIconComponent } from "@shared/keen-icon/keen-icon.component";


@Component({
  selector: "app-modal-form",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  standalone: true,
  imports: [CommonModule, HostDirective, NgbModalModule, TranslateModule, KeenIconComponent],
})
export class ModalComponent implements OnInit {
  @Input() data: ModalServiceOption;

  @ViewChild(HostDirective, {static: true}) appHost!: HostDirective;

  constructor(
    public ngbActiveModal: NgbActiveModal
  ) {}

  ngOnInit() {
    if (this.data && this.data.component) {
      this.loadComponent(this.data.component);
    }
  }

  close() {
    this.ngbActiveModal.close(ModalClose.CLOSE);
  }

  private loadComponent(component: any) {
    const _viewContainerRef = this.appHost.viewContainerRef;
    _viewContainerRef.clear();
    const componentRef: ComponentRef<any> = _viewContainerRef.createComponent<any>(component);
    for (const key in this.data.componentOptions) {
      componentRef.instance[key] = this.data.componentOptions[key];
    }
  }
}
