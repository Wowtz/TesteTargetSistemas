import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-question',
  templateUrl: './fourth-question.component.html',
  styleUrls: ['./fourth-question.component.scss']
})
export class FourthQuestionComponent implements OnInit {

  total = 0;

  cidades:any = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  }
  
  porcentagens:any = {
  }

  constructor() { }

  ngOnInit(): void {
    this.calcPorcentagens();
  }

  calcPorcentagens() : void {
    for(var cidade in this.cidades){
      this.total += this.cidades[cidade];
    }

    for(var porcCidade in this.cidades){
      let nomeCidade = porcCidade;
      //arredondamento com uma casa decimal
      let porcentagem = (Math.round((this.cidades[porcCidade] / this.total)*1000))/10;
      this.porcentagens[`${nomeCidade}`] = porcentagem;
    }
  }
}
