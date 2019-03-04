import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhtoanComponent } from './thanhtoan.component';

describe('ThanhtoanComponent', () => {
  let component: ThanhtoanComponent;
  let fixture: ComponentFixture<ThanhtoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanhtoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhtoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
