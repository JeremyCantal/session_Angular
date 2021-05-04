import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {
  rue: any;
  ville: any;

  nom = 'Snow';
  prenom = 'John';


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  
   // Dans adresse.component.html, construisez un lien vers la

    // route /adresse avec deux parametres

    // Dans adresse.component.ts, utilisez la solution snapshot

    // puis observable pour recuperer les parametres. Dans

    // adresse.component.html, on affiche les param` etres.

    // Verifier, en cliquant sur le lien, que les nouveaux parametres sont

    // affiches
    // Snapchot : 
            this.rue = this.route.snapshot.params.rue;
            this.ville = this.route.snapshot.params.ville;
            console.log(this.rue + " " + this.ville);

    // Observables:

      // this.route.queryParamMap.subscribe(res => {
      // this.rue = res.get('rue');
      // this.ville = res.get('ville');
      // console.log(this.rue + " " + this.ville);
    // });
  }


  goToStagiaire(){
    // this.router.navigateByUrl("/stagiaire/" + this.nom + "/" + this.prenom);
    // ou =>
    this.router.navigate(['/stagiaire', this.nom, this.prenom]);
  }
}