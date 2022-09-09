import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Warehouse } from './warehouse';
import { WarehouseService } from './warehouse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'warehouseManagerApp';
  public warehouse:Warehouse;
  public products:Product[];
  public column_string:string="auto";
  numbers(number:number){
    return Array(number);
  }

  make_string(){
    let column_size="auto"
    let result=""
      for (let i= 0;i< this.warehouse.maxColumn;i++){
        result+=column_size+" "

      }
    this.column_string=result  
  }
  constructor (private productService:ProductService,private warehouseService:WarehouseService){}
  ngOnInit(): void {
    this.getProducts()
    this.getWarehouse()
  }
    
  public getProducts():void{
    this.productService.getAllProducts().subscribe(
      (response:Product[])=>{
          this.products=response
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

  public getWarehouse():void{
    this.warehouseService.getWarehouse(1).subscribe(
      (response:Warehouse)=>{
          this.warehouse=response
          this.make_string()
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }


}
