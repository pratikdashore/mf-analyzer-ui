import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  exports: [MatCardModule, MatGridListModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTableModule, MatPaginatorModule, MatDividerModule]
})
export class MfaMaterialModule { }
