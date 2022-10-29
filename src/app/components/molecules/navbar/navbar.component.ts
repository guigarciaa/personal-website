import { Component } from "@angular/core";

@Component({
    selector: 'app-molecules-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    sections = [
        { name: 'About', anchor: '#About', active: true },
        { name: 'Experience', anchor: '#Experience', active: false },
        { name: 'Services', anchor: '#Services', active: false },
        { name: 'Portfolio', anchor: '#Portfolio', active: false },
        { name: 'Contact', anchor: '#Contact', active: false }
    ];
}