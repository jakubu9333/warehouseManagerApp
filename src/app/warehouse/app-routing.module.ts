import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  { path: '', redirectTo: '/warehouses', pathMatch: 'full' },
  { path: 'xd/:id', component: WarehouseComponent },
  { path: 'warehouses', component: WarehouseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
