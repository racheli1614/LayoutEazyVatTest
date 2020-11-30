import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BottomMenuComponent } from'../app/bottom-menu/bottom-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutContainerComponent,
    BottomMenuComponent,
    TopMenuComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
