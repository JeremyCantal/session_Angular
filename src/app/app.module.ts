import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { FormulaireExerciceComponent } from './composants/formulaires/formulaire-exercice/formulaire-exercice.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdresseComponent,
    StagiaireComponent,
    ErrorComponent,
    TemplateFormComponent,
    CalculetteComponent,
    ReactiveFormComponent,
    FormulaireExerciceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
