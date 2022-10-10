import { Component, OnInit } from '@angular/core';
import { ExperienceItem, experienceItemsList } from './experience-list-items';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css'],
})
export class ExperienceItemComponent {
  constructor() {}
  experienceListItems: ExperienceItem[] = experienceItemsList;
}
