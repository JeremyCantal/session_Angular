import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-exercice',
  templateUrl: './formulaire-exercice.component.html',
  styleUrls: ['./formulaire-exercice.component.css']
})
export class FormulaireExerciceComponent implements OnInit {

profils: any = [];

profil = this.fb.group({
  nom: ['', [Validators.required, this.checkValidatorNom]],
  prenom: ['', [Validators.required, this.checkValidatorPrenom]],
  commentaires: this.fb.array([])
})

checkValidatorPrenom(control: FormControl) {
  let str: string = control.value;
  let regex = /^[A-Z].*$/;
  if (regex.test(str)) {
    return null;
  } else {
    return { erreur: 'non valide' };
  }
}
checkValidatorNom(control: FormControl) {
  let str: string = control.value;
  let regex = /^[A-Z][a-z]{2,10}/
  if (regex.test(str)) {
    return null;
  } else {
    return { erreur: 'non valide' };
  }
}
get commentaires(){
  return this.profil.get('commentaires') as FormArray;
}

ajouterCommentaire(){
  this.commentaires.push(this.fb.group({
    titre: [''],
    cat: [''],
    contenu: ['']
  }));
}

supprimerCommentaire(i: number){
  this.commentaires.removeAt(i);
}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profil.patchValue({
      prenom: 'Jérémy',
      nom: 'Cantal',
    });
  }

  afficherTout() {
    this.profils.push({ ...this.profil.value });
    this.profil.reset();
  }
}
