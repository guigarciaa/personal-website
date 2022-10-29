import { Component } from "@angular/core";

@Component({
    selector: 'app-atoms-anchor',
    templateUrl: 'anchor.component.html',
    styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent {
    id_anchor = "#teste"
    text = "About"
}