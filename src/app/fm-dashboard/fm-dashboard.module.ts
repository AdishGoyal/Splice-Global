import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmDashboardRoutingModule } from './fm-dashboard-routing.module';
import { FmDashboardComponent } from './fm-dashboard.component';
import { PostComponent } from './post/post.component';
import { AlbumsComponent } from './albums/albums.component';
import { ViewPostComponent } from './view-post/view-post.component';


@NgModule({
  declarations: [
    FmDashboardComponent,
    PostComponent,
    AlbumsComponent,
    ViewPostComponent
  ],
  imports: [
    CommonModule,
    FmDashboardRoutingModule
  ]
})
export class FmDashboardModule { }
