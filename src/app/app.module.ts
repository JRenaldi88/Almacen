import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { BtnheadComponent } from './btnhead/btnhead.component';
import { AddprodComponent } from './addprod/addprod.component';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    BtnheadComponent,
    AddprodComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
