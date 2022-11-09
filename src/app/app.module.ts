import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProduitComponent } from './produit/produit.component';

import {FormsModule} from "@angular/forms";
import { ProduitsService } from './services/produits.service';
import { PanierService } from './services/panier.service';



@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    ProduitComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
