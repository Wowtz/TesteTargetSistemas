import { FactoryTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Faturamento } from '../models/Faturamento';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss']
})
export class ThirdQuestionComponent implements OnInit {

  menor = new Faturamento;
  maior = new Faturamento;
  acimaMedia : Faturamento[] = [];


  constructor(private question: QuestionsService) { }

  ngOnInit(): void {
  }

  //O menor valor de faturamento ocorrido em um dia do mês; 
  menorFat(){
    this.question.getMenorFaturamento().subscribe((fat: Faturamento) => 
      this.menor = fat
    )
  }

  maiorFat(){
    this.question.getMaiorFaturamento().subscribe((fat: Faturamento) => 
      this.maior = fat
    )
  }

  acimaMediaFat(){
    this.question.getAcimaMediaFat().subscribe((fat) =>
      this.acimaMedia = fat
    )
  }

}
