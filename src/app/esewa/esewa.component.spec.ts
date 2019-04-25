import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsewaComponent } from './esewa.component';

describe('EsewaComponent', () => {
  let component: EsewaComponent;
  let fixture: ComponentFixture<EsewaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsewaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsewaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
