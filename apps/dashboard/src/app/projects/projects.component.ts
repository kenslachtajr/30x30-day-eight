import { Component, OnInit } from '@angular/core';
import {
  Project,
  ProjectsService,
  emptyProject,
  NotifyService
} from '@projects/core-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'projects-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  project$;
  selectedProject: Project;
  form: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  resetProject() {
    this.form.reset();
    this.selectProject(emptyProject);
  }

  ngOnInit() {
    this.getProjects();
    this.initForm();
    this.resetProject();
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    this.form.patchValue(project);
  }

  getProjects() {
    this.project$ = this.projectsService.all();
  }

  saveProject() {
    if (!this.form.value.id) {
      this.createProject();
    } else {
      this.updateProject();
    }
  }

  updateProject() {
    this.projectsService.update(this.form.value).subscribe(() => {
      this.getProjects();
      this.resetProject();
    });
    this.notify.notification(`You have updated ${this.form.value.type}`);
  }

  createProject() {
    this.projectsService.create(this.form.value).subscribe(() => {
      this.getProjects();
      this.resetProject();
    });
    this.notify.notification(`You have create ${this.form.value.type}`);
  }

  deleteProject(project) {
    this.projectsService.delete(project.id).subscribe(() => this.getProjects());
    this.notify.notification(`You have deleted ${project.title}`);
  }

  cancel() {
    this.resetProject();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      importanceLevel: null
    });
  }
}
