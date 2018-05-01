import { Component } from '@angular/core';

import { ProduitService } from '../_services/index';
import { Produit } from '../_models';

@Component({
    selector: 'app-listeproduit',
    moduleId: module.id,
    templateUrl: 'listeproduit.component.html'
})

export class ListeproduitComponent {
    produits: Produit[] = [];

    constructor(
        private produitService: ProduitService) { }

        ngOnInit(): void {
            this.getTypep();
        }
    private getTypep(){
        this.produitService.getAll().subscribe(data => {
            this.produits = data; });
    }
}