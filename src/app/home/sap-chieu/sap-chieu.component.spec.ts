import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SapChieuComponent } from './sap-chieu.component';

describe('SapChieuComponent', () => {
  let component: SapChieuComponent;
  let fixture: ComponentFixture<SapChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
