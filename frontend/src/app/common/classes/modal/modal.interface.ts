import { NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";

export interface ModalServiceOption {
  component: any,
  title: string,
  componentOptions?: any,
  modalOptions?: NgbModalOptions,
  button?: boolean,
}

export interface ConfirmationDialogModalOpen {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  btnStyleType?: string;
}
