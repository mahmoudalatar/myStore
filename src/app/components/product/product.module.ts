import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ProductModule {
  id: number = 0;
  name: string = '';
  price: number = 0;
  url: string = '';
  description: string = '';
  number: number = 0;
}
