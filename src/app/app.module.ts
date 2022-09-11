import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { WarehouseService } from './warehouse/warehouse.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, WarehouseComponent, WarehouseListComponent],
  imports: [MatButtonModule,BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule,MatGridListModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [WarehouseService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
