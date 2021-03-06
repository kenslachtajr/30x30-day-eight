import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@projects/core-data';

@Component({
  selector: 'projects-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
@Input() projects: Project[]
@Input() readonly = false;
@Output() selected = new EventEmitter();
@Output() deleted = new EventEmitter();
}
