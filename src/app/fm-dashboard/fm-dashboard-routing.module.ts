import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { FmDashboardComponent } from './fm-dashboard.component';
import { PostComponent } from './post/post.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  { path: '', component: FmDashboardComponent },
  { path: 'post', component: PostComponent },
  { path: 'viewPost', component: ViewPostComponent },
  { path: 'albums', component: AlbumsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmDashboardRoutingModule { }
