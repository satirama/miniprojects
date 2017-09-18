import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartedComponent } from './started/started.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
