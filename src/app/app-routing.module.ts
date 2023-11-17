import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalModule } from './personal/personal.module';
import { LayoutComponent } from './personal/pages/layout/layout.component';
import { Error404Component } from './shared/pages/error404/error404.component';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
