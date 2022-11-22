import { Component, Input, OnInit } from '@angular/core';

export enum TypeIcon {
  SOLID = 'Solid',
  CORE = 'Core',
  BRANDS = 'Brands',
  REGULAR = 'Regular',
}

@Component({
  selector: 'app-atoms-small-icon',
  templateUrl: 'small-icon.component.html',
  styleUrls: ['./small-icon.component.scss'],
})
export class SmallIconComponent implements OnInit {
  @Input() typeIcon: TypeIcon;
  @Input() iconName: string;
  fa: any;

  async ngOnInit(): Promise<void> {
    let _fa;
    switch (this.typeIcon) {
      case TypeIcon.SOLID:
        _fa = await import('@fortawesome/free-solid-svg-icons');
        this.fa = (_fa as any)[this.iconName];
        break;
      case TypeIcon.CORE:
        _fa = await import('@fortawesome/fontawesome-svg-core');
        this.fa = (_fa as any)[this.iconName];
        break;
      case TypeIcon.BRANDS:
        _fa = await import('@fortawesome/free-brands-svg-icons');
        this.fa = (_fa as any)[this.iconName];
        break;
      case TypeIcon.REGULAR:
        _fa = await import('@fortawesome/free-regular-svg-icons');
        this.fa = (_fa as any)[this.iconName];
        break;
      default:
        _fa = await import('@fortawesome/free-solid-svg-icons');
        this.fa = (_fa as any)[this.iconName];
        break;
    }
  }
}
