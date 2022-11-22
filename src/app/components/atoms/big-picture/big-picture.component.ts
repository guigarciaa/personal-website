import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atoms-big-picture',
  templateUrl: 'big-picture.component.html',
  styleUrls: ['./big-picture.component.scss'],
})
export class BigPictureComponent {
  @Input() src: string;
}
