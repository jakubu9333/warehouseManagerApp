import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  { path: '', redirectTo: '/warehouses?id=1', pathMatch: 'full' },
  { path: 'warehouses', component: WarehouseListComponent },
  { path: 'warehouse', component: WarehouseComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
