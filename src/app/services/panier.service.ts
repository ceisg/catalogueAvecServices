import { Injectable } from '@angular/core';
import { Produit } from '../Produit';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  panier: Produit[] = [];

  constructor() {}

  getPanier(): Produit[] {
    return this.panier;
  }

  ajouterProduitAuPanier(p: Produit): void {
    this.panier.push(p);
  }

  getTotal(): number {
    let tot = 0;
    for (let pr of this.panier) tot += pr.prix;
    return tot;
  }

  supprimer(pos: number): void {
    for (let i = pos; i < this.panier.length - 1; i++)
      this.panier[i] = this.panier[i + 1];
    this.panier.pop();
  }
}
