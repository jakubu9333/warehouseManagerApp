import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Warehouse } from './warehouse';
import { WarehouseService } from './warehouse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'warehouseManagerApp';
  id = 1;
  public warehouse: Warehouse;
  public products: Product[];
  constructor(
    private productService: ProductService,
    private warehouseService: WarehouseService
  ) {}
  ngOnInit(): void {
    this.getProducts();
    this.getWarehouse();
  }
  expand_row(): void {
    let r = true;
    this.warehouseService
      .expandWarehouse(this.id, undefined, undefined, true)
      .subscribe({
        next: (response: Warehouse) => {
          this.warehouse = response;
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      });
  }

  shrink_row(): void {
    this.warehouseService
      .shrinkWarehouse(this.id, undefined, undefined, true)
      .subscribe({
        next: (response: Warehouse) => {
          this.warehouse = response;
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      });
  }

  expand_col(): void {
    this.warehouseService.expandWarehouse(this.id, true).subscribe({
      next: (response: Warehouse) => {
        this.warehouse = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  shrink_col() {
    this.warehouseService.shrinkWarehouse(this.id, true).subscribe({
      next: (response: Warehouse) => {
        this.warehouse = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public getProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (response: Product[]) => {
        this.products = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public getWarehouse(): void {
    this.warehouseService.getWarehouse(this.id).subscribe({
      next: (response: Warehouse) => {
        this.warehouse = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  numbers(number?: number) {
    if (number==undefined||number<0){
      number=1
    }
    return Array(number);
  }

  floor(number: number) {
    return Math.floor(number);
  }
}
