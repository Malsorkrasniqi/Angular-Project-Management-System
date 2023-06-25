import { ChangeDetectorRef, Component } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
import { PRODUCTS, Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {

  dataSource:Product[]=[];
  displayedColumns: string[] = ['productName', 'Category', 'Price', 'Date','Action'];

  constructor(public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) {}

  ngOnInit()
  {
    this.dataSource = PRODUCTS;
  }
  

  openDialog() {
    this.dialog.open(AddProductDialogComponent).afterClosed().subscribe(data=>{
      if(data)
      {
        this.dataSource.push(data);
        this.dataSource = [...this.dataSource]
        this.changeDetectorRefs.detectChanges();
      }
    });
  }

  deleteButton(index: number) { 
    // array PeriodicElement[]
    this.dataSource = this.dataSource
      .filter((data: any, i: number) => {
        if (i !== index) {
          return data;
        }
      });
  }

  editButton(index: number, element:Product){
    /* we are using index to reference element and element to get the element to edit */
    let config:MatDialogConfig = new MatDialogConfig();
    config.data = element;
    this.dialog.open(AddProductDialogComponent,config).afterClosed().subscribe(element=>{
      this.dataSource[index]=element;
      this.dataSource=[...this.dataSource];
    })
  }
}


