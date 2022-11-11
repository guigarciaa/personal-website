import { Component } from '@angular/core';
import { TypeIcon } from '@atoms/small-icon/small-icon.component';

@Component({
  selector: 'app-atoms-small-card-infos',
  templateUrl: 'small-card-infos.component.html',
  styleUrls: ['./small-card-infos.component.scss'],
})
export class SmallCardInfosComponent {
    typeIcon = TypeIcon;
    faIcon = 'faBars';
}
