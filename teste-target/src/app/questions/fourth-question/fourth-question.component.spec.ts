import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthQuestionComponent } from './fourth-question.component';

describe('FourthQuestionComponent', () => {
  let component: FourthQuestionComponent;
  let fixture: ComponentFixture<FourthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
