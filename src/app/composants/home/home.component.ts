import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/classes/personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Déclaration d'une variable de type string
  
  title:string = 'Session Angular';

  nom:string = 'Wick';
  couleur='blue';
 

  // Création un objet de type Personne
  personne:Personne = new Personne(100, 'wick', 'John');

  // array de type Personne
  personnes:Array<Personne> = [
    new Personne(100, 'Wick', 'John'),
    new Personne(200, 'Abruzzi', 'John'),
    new Personne(300, 'Doe', 'John'),
    new Personne(400, 'Wayne', 'John')
  ];


  tasks = [
    {
      name: 'EATING',
      status: 'doing'
    },
    {
      name: 'DRINKING',
      status: 'done'
    },
    {
      name: 'SLEEPING',
      status: 'done'
    }
  ];

  getC(elt: any){
    if(elt == "done")
      return "green";
    else
      return;
  }

  // Création un tableau d'entiers tab
  tab:number[] = [2, 3, 5, 8, 12, 15, 18, 20];

// Ajout d'une méthode direBonjour()
  direBonjour(){
    return "Hey man !";
  }
  // Ou avec méthode flèchée :
  direBonjour2 = () => {
    return "Hey man 2";
  }

  getColor(){
    return "White";
  }

  getBackgroundColor(){
    return "red";
  }



  constructor() { }

  ngOnInit(): void {
  }

}
