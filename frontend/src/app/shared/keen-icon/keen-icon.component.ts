import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import iconsJSON from './icons.json';
import {icons} from "@app/icons";

@Component({
  standalone: true,
  selector: 'keen-icon',
  templateUrl: './keen-icon.component.html',
  styleUrls: ['./keen-icon.component.scss'],
  imports: [CommonModule]
})
export class KeenIconComponent implements OnInit {
  @Input() name: keyof typeof icons | string;
  @Input() class = 'mr-25 font-medium-3';
  @Input() type: 'outline' | 'solid' | 'duotone' = 'outline';
  @Input() color: 'primary' | 'success' | 'info' | 'danger' | 'dark' | 'secondary';
  @Input() size: 'small-3' | 'small-4' | 'medium-1' | 'medium-2' | 'medium-3' | 'medium-4' | 'medium-5' | 'large-1';

  pathsNumber = 0;

  @HostBinding('style.display')
  get styleDisplay() {
    return 'contents';
  }

  ngOnInit() {
    if (this.size) {
      this.class = this.class.replace('font-', '');
    }

    // @ts-ignore
    this.name = icons[this.name] || this.name;
    if (this.type === 'duotone') {
      // @ts-ignore
      this.pathsNumber = iconsJSON[this.type + '-paths'][this.name] ?? 0;
    }
  }
}
