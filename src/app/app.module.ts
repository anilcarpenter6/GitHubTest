import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { DxDataGridModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MasterComponent } from './master/master.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, DxButtonModule,DxDataGridModule, FormsModule, AppRoutingModule, MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
