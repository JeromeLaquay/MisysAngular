import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Utilisateur } from '../_models/index';

@Injectable()
export class UtilisateurService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Utilisateur[]>(appConfig.apiUrl + '/utilisateurs');
    }

    getById(_id: string) {
        return this.http.get(appConfig.apiUrl + '/utilisateurs/' + _id);
    }

    create(user: Utilisateur) {
        return this.http.post(appConfig.apiUrl + '/utilisateurs/register', user);
    }

    update(user: Utilisateur) {
        return this.http.put(appConfig.apiUrl + '/utilisateurs/' + user._id, user);
    }

    delete(_id: string) {
        return this.http.delete(appConfig.apiUrl + '/utilisateurs/' + _id);
    }
}