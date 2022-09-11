import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Warehouse } from './warehouse';
import { WarehouseService } from './warehouse.service';


@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  row=0
  col=0
  id = 1;
  xd:string|null
  public warehouse: Warehouse;
  public products: Product[];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private warehouseService: WarehouseService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
    });
  
    this.warehouse={id:this.id,maxColumn:0,maxRow:0,maxFloor:0}
    this.getProducts();
    this.getWarehouse();
  }

  showCoordinates(index:number){
    
      this.row=Math.floor(index/this.warehouse.maxColumn)+1
      this.col=index%this.warehouse.maxColumn+1
  }
  hiden(){
    if (this.row==0||this.col==0){
        return "hidden"
    }
    return "visible"

  }

  expand_row(): void {
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

  maxWidth(){
    if (this.warehouse.maxColumn<=3){
      return 25*this.warehouse.maxColumn+"%"
    }
    return 100+"%"
  }


}
