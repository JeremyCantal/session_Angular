import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { HomeComponent } from './composants/home/home.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';

const routes: Routes = [
    // localhost:4200/
  {path: 'home', component: HomeComponent},
  // localhost:4200/stagiaire
  {path: 'stagiaire', component: StagiaireComponent},
  // localhost:4200/stagiaire/John/Doe
  {path: 'stagiaire/:nom/:prenom', component: StagiaireComponent},
  {path: 'template-form', component: TemplateFormComponent},
    // localhost:4200/adresse
  {path: 'adresse', component: AdresseComponent},
  {path: 'calculette', component: CalculetteComponent},
  {path: 'adresse/:rue/:ville', component: AdresseComponent},
  // localhost:4200/error
  {path: 'error', component: ErrorComponent},
  // pathMatch = 'full' signifie que tout chemin d'URL doit correspondre
  {path: '', redirectTo : '/home', pathMatch:'full'},
  // On affichera error.component en cas de chemin inexistant
  {path: '**', redirectTo : '/error'},
];

// enableTracing:true permet de garder une trace de la recherche d'un chemin (pour le deboggage)
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
