import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftDrawerComponent } from './left-drawer.component';

describe('LeftDrawerComponent', () => {
  let component: LeftDrawerComponent;
  let fixture: ComponentFixture<LeftDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
