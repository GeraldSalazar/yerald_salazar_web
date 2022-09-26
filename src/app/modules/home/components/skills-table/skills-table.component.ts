import { Component, OnInit } from '@angular/core';
import { Skill, skillsList } from './skills-table-data-struct';
@Component({
  selector: 'app-skills-table',
  templateUrl: './skills-table.component.html',
  styleUrls: ['./skills-table.component.css'],
})
export class SkillsTableComponent {
  skillsToDisplay: Skill[] = skillsList;

  constructor() {}
}
