import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFunctionalityModule } from './app-functionality-module/app-functionality-module.module';
import { SearchBarComponent } from './app-functionality-module/components/search-bar/search-bar.component';
import { ServicesPanelComponent } from './app-functionality-module/components/services-panel/services-panel.component';
import { TitlePanelComponent } from './app-functionality-module/components/title-panel/title-panel.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFunctionalityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
