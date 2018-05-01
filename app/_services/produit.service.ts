import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Produit } from '../_models/index';

@Injectable()
export class ProduitService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Produit[]>(appConfig.apiUrl + '/produits');
    }

    getById(_id: string) {
        return this.http.get(appConfig.apiUrl + '/produits/' + _id);
    }

    create(produit: Produit) {
        return this.http.post(appConfig.apiUrl + '/produit/register', produit);
    }

    update(produit: Produit) {
        return this.http.put(appConfig.apiUrl + '/produit/' + produit._id, produit);
    }

    delete(_id: string) {
        return this.http.delete(appConfig.apiUrl + '/produit/' + _id);
    }
}