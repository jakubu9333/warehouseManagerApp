import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { WarehouseService } from './warehouse.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [MatButtonModule,BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule,MatGridListModule],
  providers: [WarehouseService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
