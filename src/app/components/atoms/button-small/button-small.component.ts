import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atoms-button-small',
  templateUrl: 'button-small.component.html',
  styleUrls: ['./button-small.component.scss'],
})
export class ButtonSmallComponent {
  @Input() fullColor: boolean = false;
}
