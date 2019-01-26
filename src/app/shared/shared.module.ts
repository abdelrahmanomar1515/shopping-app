import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { CollapseMenuDirective } from './collapse-menu.directive';

@NgModule({
  declarations: [
    DropdownDirective, CollapseMenuDirective
  ],
  exports: [
    CommonModule, 
    DropdownDirective,
    CollapseMenuDirective]
})
export class SharedModule { }
