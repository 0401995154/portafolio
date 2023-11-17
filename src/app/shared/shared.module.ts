import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [MenuComponent, Error404Component],
  imports: [CommonModule,MaterialModule],
  exports: [MenuComponent],
})
export class SharedModule {}
