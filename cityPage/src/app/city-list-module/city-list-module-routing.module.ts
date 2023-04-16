import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListModuleComponent } from './city-list-module.component';

const routes: Routes = [{ path: '', component: CityListModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityListModuleRoutingModule { }
