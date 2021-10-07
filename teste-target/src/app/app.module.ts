import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstQuestionComponent } from './questions/first-question/first-question.component';
import { SecondQuestionComponent } from './questions/second-question/second-question.component';

import { FormsModule } from '@angular/forms';
import { ThirdQuestionComponent } from './questions/third-question/third-question.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { QuestionsService } from './questions/questions.service';
import { FourthQuestionComponent } from './questions/fourth-question/fourth-question.component';
import { FifthQuestionComponent } from './questions/fifth-question/fifth-question.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstQuestionComponent,
    SecondQuestionComponent,
    ThirdQuestionComponent,
    FourthQuestionComponent,
    FifthQuestionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [HttpClientModule, QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
