import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Utilisateur } from '../_models/index';
import { UtilisateurService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: any;
    utilisateurs: Utilisateur[] = [];

    constructor(private utilisateurService: UtilisateurService,
                private route: ActivatedRoute,
                private router: Router,) {
        
        
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loadAllUsers();
    }

    deleteUser(_id: string) {
        this.utilisateurService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.utilisateurService.getAll().subscribe(utilisateurs => { this.utilisateurs = utilisateurs; });
    }
}