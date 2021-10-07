import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss']
})
export class FirstQuestionComponent implements OnInit {

  indice:number = 13;
  soma:number  = 0;
  k:number  = 0;

  questao = "<p>{<p> K = K + 1; <p> SOMA = SOMA + K;<p>}"


  constructor() { }

  ngOnInit(): void {
    this.calcResult();
  }
  
  calcResult(): void {
    while(this.k < this.indice){
      this.k = this.k + 1;
      this.soma = this.soma + this.k;
    }
  }
}
