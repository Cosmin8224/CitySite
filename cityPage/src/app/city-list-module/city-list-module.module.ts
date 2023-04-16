import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityListModuleRoutingModule } from './city-list-module-routing.module';
import { CityListModuleComponent } from './city-list-module.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { SelectedCityComponent } from './components/selected-city/selected-city.component';
import { TitlePanelComponent } from '../app-functionality-module/components/title-panel/title-panel.component';


@NgModule({
  declarations: [
    CityListModuleComponent,
    CityListComponent,
    CityCardComponent,
    SelectedCityComponent
  ],
  imports: [
    CommonModule,
    CityListModuleRoutingModule
  ],
  exports:[
    CityListComponent,
    CityCardComponent,
    SelectedCityComponent
  ]
})
export class CityListModuleModule { }
