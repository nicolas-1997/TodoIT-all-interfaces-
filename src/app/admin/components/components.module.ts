import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';



@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterUserComponent
  ]
})
export class ComponentsModule { }
