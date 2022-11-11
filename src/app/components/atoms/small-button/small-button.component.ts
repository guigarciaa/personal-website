import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atoms-small-button',
  templateUrl: 'small-button.component.html',
  styleUrls: ['./small-button.component.scss'],
})
export class SmallButtonComponent {
  @Input() fullColor: boolean = false;
}
