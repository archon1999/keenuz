import { Injectable } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ModalServiceOption } from "@app/common/classes/modal/modal.interface";
import { ModalClose } from "@app/common/classes/modal/modal.enum";
import { ModalComponent } from "@app/common/classes/modal/modal/modal.component";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) {
  }

  open(options: ModalServiceOption): Promise<ModalClose> {
    const {component, modalOptions = {}, title, componentOptions = {}, button = true} = options;

    const defModalOptions = {centered: true};

    this.modalRef = this.modalService.open(ModalComponent, {
      ...defModalOptions,
      ...modalOptions,
    });
    this.modalRef.componentInstance.data = {
      component,
      componentOptions,
      modalOptions,
      title,
      button
    };

    return this.modalRef.result;
  }

  close(closeStatus: ModalClose = ModalClose.CLOSE) {
    this.modalRef.close(closeStatus);
  }

  closeAll() {
    this.modalService.dismissAll();
  }
}
