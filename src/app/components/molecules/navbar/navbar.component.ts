import { Component } from "@angular/core";

interface ISection {
  name: string;
  anchor: string;
  active: boolean;
}

@Component({
  selector: "app-molecules-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  sections: ISection[] = [
    { name: "About", anchor: "#About", active: true },
    { name: "Experience", anchor: "#Experience", active: false },
    { name: "Services", anchor: "#Services", active: false },
    { name: "Portfolio", anchor: "#Portfolio", active: false },
    { name: "Contact", anchor: "#Contact", active: false },
  ];

  anchorInPage(section: ISection) {
    this.sections.forEach((value) => {
      if (section.name == value.name) {
        value.active = true;
      } else {
        value.active = false;
      }
    });
  }
}
