import { Component, Input } from "@angular/core";

@Component({
  selector: "app-atoms-anchor",
  templateUrl: "anchor.component.html",
  styleUrls: ["./anchor.component.scss"],
})
export class AnchorComponent {
  @Input() idAnchor: string;
  @Input() isActive: boolean;
}
