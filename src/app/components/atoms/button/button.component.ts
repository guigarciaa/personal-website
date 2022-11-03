import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atoms-button',
  templateUrl: 'button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() fullColor: boolean = false;
}
