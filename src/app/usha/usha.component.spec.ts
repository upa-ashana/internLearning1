import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UshaComponent } from './usha.component';

describe('UshaComponent', () => {
  let component: UshaComponent;
  let fixture: ComponentFixture<UshaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UshaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
