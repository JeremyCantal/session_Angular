import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {

  nbr1!: number ;
  nbr2!: number ;
  res!: number ;

  constructor() { }

  ngOnInit(): void {
  }

  additionnerNumbers(){
    this.res = this.nbr1 + this.nbr2;
  }
  soustraireNumbers(){
    this.res = this.nbr1 - this.nbr2;
  }
  multiplierNumbers(){
    this.res = this.nbr1 * this.nbr2;
  }
  diviserNumbers(){
    this.res = this.nbr1 / this.nbr2;
  }


}
