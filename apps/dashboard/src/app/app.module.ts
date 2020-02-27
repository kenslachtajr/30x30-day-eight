import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@projects/core-data';
import { MaterialModule } from '@projects/material';
import { UiLoginModule } from '@projects/ui-login';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { ProjectsItemComponent } from './projects/projects-item/projects-item.component';
import { WildComponent } from './wild/wild.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectsDetailsComponent,
    ProjectsItemComponent,
    WildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    MaterialModule,
    UiLoginModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
