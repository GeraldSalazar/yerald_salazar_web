import { Component, OnInit } from '@angular/core';
import { conceptsList } from './concepts-list';

@Component({
  selector: 'app-skills-concepts',
  templateUrl: './skills-concepts.component.html',
  styleUrls: ['./skills-concepts.component.css'],
})
export class SkillsConceptsComponent {
  constructor() {}
  conceptList: string[] = conceptsList;
}
