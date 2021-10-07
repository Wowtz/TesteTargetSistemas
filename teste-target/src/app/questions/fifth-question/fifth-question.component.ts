import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.scss']
})
export class FifthQuestionComponent implements OnInit {

  texto: string = "";
  result: string = "";

  reverse(event: string){
    var result = "";
    event = event || "";
    for (var i=0; i<event.length; i++) {
      result = event.charAt(i) + result;
    }
    return this.result = result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
