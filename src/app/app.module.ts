import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetupComponent } from './pages/setup/setup.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SetupFormComponent } from './pages/setup/setup-form/setup-form.component';
import { ProjectListComponent } from './pages/projects/project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    ProjectsComponent,
    SetupFormComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
