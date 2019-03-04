import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatgheComponent } from './datghe.component';

describe('DatgheComponent', () => {
  let component: DatgheComponent;
  let fixture: ComponentFixture<DatgheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatgheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatgheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
