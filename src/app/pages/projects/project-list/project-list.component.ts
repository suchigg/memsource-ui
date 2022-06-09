import { Projects } from './../../../core/models/projects.model';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Project } from 'src/app/core/models/projects.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent {

  @Input()
  projects: Projects | undefined | null;

  constructor() { }

}
