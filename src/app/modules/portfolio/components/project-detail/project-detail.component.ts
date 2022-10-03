import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  Project,
  projectList,
} from 'src/app/shared/components/portfolio-preview/portfolio-project-list';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project!: Project;
  constructor(
    private activatedRoute: ActivatedRoute,
    private scroll: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.project = projectList[param['id']];
    });
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
