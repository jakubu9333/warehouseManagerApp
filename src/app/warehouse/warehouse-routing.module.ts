import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseComponent } from './warehouse.component';

const routes: Routes = [ { path: 'xd/:id', component: WarehouseComponent },
{ path: 'warehouses', component: WarehouseComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
