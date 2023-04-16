import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleRoutingModule } from './my-module-routing.module';
import { MyModuleComponent } from './my-module.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ServicesPanelComponent } from './components/services-panel/services-panel.component';
import { TitlePanelComponent } from './components/title-panel/title-panel.component';
import { CityCardComponent } from '../city-list-module/components/city-card/city-card.component';
import { CityListModuleModule } from '../city-list-module/city-list-module.module';

@NgModule({
  declarations: [
    MyModuleComponent,
    SearchBarComponent,
    ServicesPanelComponent,
    TitlePanelComponent
  ],
  imports: [
    CommonModule,
    MyModuleRoutingModule,
    FormsModule,
    CityListModuleModule
  ],
  exports: [
    SearchBarComponent,
    ServicesPanelComponent,
    TitlePanelComponent
  ]
})
export class AppFunctionalityModule { }
