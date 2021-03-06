import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { ColumnaComponent } from './columna/columna.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    ColumnaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialsModule,
    FormsModule
  ],
  exports: [
    FormComponent,
    TableComponent,
    ColumnaComponent
  ]
})
export class ComponentsModule { }
