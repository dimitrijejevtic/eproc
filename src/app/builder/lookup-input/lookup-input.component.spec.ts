import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupInputComponent } from './lookup-input.component';

describe('LookupInputComponent', () => {
  let component: LookupInputComponent;
  let fixture: ComponentFixture<LookupInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
