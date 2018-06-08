import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepValidationComponent } from './step-validation.component';

describe('StepValidationComponent', () => {
  let component: StepValidationComponent;
  let fixture: ComponentFixture<StepValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
