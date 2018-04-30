import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Typep } from '../_models/index';

@Injectable()
export class TypepService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Typep[]>(appConfig.apiUrl + '/typep');
    }

    getById(_id: string) {
        return this.http.get(appConfig.apiUrl + '/typep/' + _id);
    }

    create(typep: Typep) {
        return this.http.post(appConfig.apiUrl + '/typep/register', typep);
    }

    update(typep: Typep) {
        return this.http.put(appConfig.apiUrl + '/typep/' + typep._id, typep);
    }

    delete(_id: string) {
        return this.http.delete(appConfig.apiUrl + '/typep/' + _id);
    }
}