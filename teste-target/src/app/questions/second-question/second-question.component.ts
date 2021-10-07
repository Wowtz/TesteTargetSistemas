import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.scss']
})
export class SecondQuestionComponent implements OnInit {

  valor: number = 0;
  fibonacci = [0, 1];
  exist: string = "Digite um número.";

  constructor() { }

  ngOnInit(): void {
  }

  calcFibonacci(){
    let valor = this.valor;
    let lastElement = 0;

    if (Number.isInteger(valor) == false) {
      return this.exist = "Por favor insira somente Números inteiros.";
    }

    if (valor < 0) {
      return this.exist = "Por favor insira somente Números positivos.";
    }

    while(valor >= this.fibonacci[this.fibonacci.length - 1] || this.fibonacci.includes(valor)){
      if(this.fibonacci.includes(valor)){
        //reinicio o array, pois se seu tamanho for muito grande pode sobrecarregar
        //uma pesquisa simples posteriormente
        this.fibonacci = [0, 1]
        return this.exist = "Esse Número faz parte da sequência de Fibonacci.";
      }
      lastElement = this.fibonacci[this.fibonacci.length - 1] + this.fibonacci[this.fibonacci.length - 2];
      this.fibonacci.push(lastElement);
    }
    //reinicio o array, pois se seu tamanho for muito grande pode sobrecarregar
    //uma pesquisa simples posteriormente
    this.fibonacci = [0, 1]
    return this.exist = "Esse Número não faz parte da sequência de Fibonacci.";
  }
}
