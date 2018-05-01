import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { appConfig } from '../app.config';
import { Utilisateur } from '../_models';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(utilisateur: Utilisateur) {
        return this.http.post<any>(appConfig.apiUrl + '/utilisateur/authenticate',utilisateur)
            .map(utilisateur2 => {
                // login successful if there's a jwt token in the response
                if (utilisateur2 && utilisateur2.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(utilisateur2));
                }

                return utilisateur2;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}