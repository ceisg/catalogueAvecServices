import { Component, OnInit } from '@angular/core';
import { Produit } from '../Produit';
import { PanierService } from '../services/panier.service';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  produits: Produit[] = [];
  panier: Produit[] = [];

  constructor(
    private prdService: ProduitsService,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    this.produits = this.prdService.getAllProduits();
    this.panier = this.panierService.getPanier();
  }

  AjouterP($event: Produit): void {
    this.panierService.ajouterProduitAuPanier($event);
   
  }

  getTotal(): number {
    return this.panierService.getTotal();
  }

  delete(pos: number) {
    this.panierService.supprimer(pos);
  }
}
