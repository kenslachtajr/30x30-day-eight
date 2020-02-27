import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Project } from '@projects/core-data';

@Component({
  selector: 'projects-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent {
  currentProject: Project;
  originalTitle;
  @Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  }
  @Input() form;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
