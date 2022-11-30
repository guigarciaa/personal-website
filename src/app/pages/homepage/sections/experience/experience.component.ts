import { Component, OnInit } from '@angular/core';
import Flickity from 'flickity';

@Component({
  selector: 'app-homepage-experience',
  templateUrl: 'experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  ngOnInit(): void {
    var elem = document.querySelector('.main-carousel');
    if (elem) var flkty = new Flickity(elem, {});
  }
}
