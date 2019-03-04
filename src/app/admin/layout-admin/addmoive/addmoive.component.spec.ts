import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoiveComponent } from './addmoive.component';

describe('AddmoiveComponent', () => {
  let component: AddmoiveComponent;
  let fixture: ComponentFixture<AddmoiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmoiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
