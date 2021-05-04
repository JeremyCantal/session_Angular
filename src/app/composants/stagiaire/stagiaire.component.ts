import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  nom: any;
  prenom: any;

  // Le constructeur en Angular sert seulement à faire des injections de dépendances
  constructor(private route: ActivatedRoute) { }

  


// Méthode qui sera exécutée quand Angular aura fini d'initialiser le composant
  ngOnInit(): void {
  
    // 2 formes de paramètres de requêtes

      // 1) /chemin/nom/prenom

            // 2 manières différentes pour récupérer ces valeurs respectives

            // paramMap pour /chemin/John/Doe

            // Solution avec les snapshots (Instantané) :

            this.nom = this.route.snapshot.params.nom;
            this.prenom = this.route.snapshot.params.prenom;
            console.log(this.nom + " " + this.prenom);


            //Solution avec les observables
            //Ils emettent des events qui seront interceptés par des observateurs (observers)
            // observable = 'this.route.paramMap.suscribe(observers) :

            // this.route.paramMap.subscribe(res => {
            //   this.nom = res.get('nom');
            //   this.prenom = res.get('prenom');
            //   console.log(this.nom + " " + this.prenom);
            // });

      // 2) /chemin?nom=doe&prenom=john

            // http://localhost:4200/stagiaire?nom=Wick&prenom=John

            // queryParams pour /chemin?nom=doe&prenom=john => snapshot
        
            // queryParamMap pour /chemin?nom=doe&prenom=john => Observables

            // Solution avec les snapshots (Instantané) :

            // this.nom = this.route.snapshot.queryParams.nom;
            // this.prenom = this.route.snapshot.queryParams.prenom;
            // console.log(this.nom + " " + this.prenom);


            //Solution avec les observables

            // this.route.queryParamMap.subscribe(res => {
            //   this.nom = res.get('nom');
            //   this.prenom = res.get('prenom');
            //   console.log(this.nom + " " + this.prenom);
            // });
  }
}
