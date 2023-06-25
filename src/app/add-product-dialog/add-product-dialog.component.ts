import { Component ,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss'],
})
export class AddProductDialogComponent {
  public form = this.fb.group({
    productName: ['', [Validators.required]],
    Category: ['',[Validators.required]],
    Price: ['',[Validators.required]],
    Date: ['',[Validators.required]],
  });

  categories=['Fashion','Electronics','Sports', 'Automotive']

  entity:any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.entity = data;
  }

  ngOnInit(){
    if(this.entity)
    {
      this.form.setValue(this.entity);
    }
  }

  public cancel() {
    this.dialogRef.close();
  }
  public save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
      console.log(this.form.value);

    } else {
      return;
    }
  }
}
