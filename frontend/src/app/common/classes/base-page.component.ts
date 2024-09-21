import {Component, OnInit} from '@angular/core';
import { ContentHeader } from '@layout/components/content-header/content-header.component';
import { BaseComponent } from "@app/common/classes/base.component";

@Component({
  template: '',
  standalone: true
})
export class BasePageComponent extends BaseComponent implements OnInit {
  protected contentHeader: ContentHeader;

  ngOnInit() {
    this.loadContentHeader()
  }

  protected getContentHeader(): ContentHeader { return null; }
  protected loadContentHeader() { this.contentHeader = this.getContentHeader(); }
}
