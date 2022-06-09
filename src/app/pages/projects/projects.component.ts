import { Observable } from 'rxjs';
import { ProjectService } from './../../core/services/project.service';
import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/core/models/projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects$: Observable<Projects> | undefined | null;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects$ = this.projectService.findAll();
  }

}
