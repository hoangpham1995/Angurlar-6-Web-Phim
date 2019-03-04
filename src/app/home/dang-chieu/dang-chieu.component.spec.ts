import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangChieuComponent } from './dang-chieu.component';

describe('DangChieuComponent', () => {
  let component: DangChieuComponent;
  let fixture: ComponentFixture<DangChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
