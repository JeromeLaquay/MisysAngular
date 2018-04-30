import { Component } from '@angular/core';

import { TypepService } from '../_services/index';
import { Typep } from '../_models';

@Component({
    selector: 'app-typep',
    moduleId: module.id,
    templateUrl: 'typep.component.html'
})

export class TypepComponent {
    typep: any;

    constructor(
        private typepService: TypepService) { }

        ngOnInit(): void {
            this.getTypep();
        }
    private getTypep(){
        this.typepService.getById("1").subscribe(data => {
            this.typep = data; });
    }
}