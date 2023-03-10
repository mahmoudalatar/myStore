import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ComponentsComponent } from './components/components.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { FormComponent } from './components/cart/form/form.component';
import { ItemComponent } from './components/product-item/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentsComponent,
    ProductItemComponent,
    ProductItemDetailComponent,

    CartComponent,
    ConfirmationComponent,
    FormComponent,
    ItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
