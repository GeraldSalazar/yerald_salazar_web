import { Component, OnInit } from '@angular/core';
import { projectList } from './portfolio-project-list';
@Component({
  selector: 'app-portfolio-preview',
  templateUrl: './portfolio-preview.component.html',
  styleUrls: ['./portfolio-preview.component.css'],
})
export class PortfolioPreviewComponent {
  projectListToDisplay = projectList;

  constructor() {}
}
