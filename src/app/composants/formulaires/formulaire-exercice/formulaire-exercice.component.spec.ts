import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireExerciceComponent } from './formulaire-exercice.component';

describe('FormulaireExerciceComponent', () => {
  let component: FormulaireExerciceComponent;
  let fixture: ComponentFixture<FormulaireExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireExerciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
