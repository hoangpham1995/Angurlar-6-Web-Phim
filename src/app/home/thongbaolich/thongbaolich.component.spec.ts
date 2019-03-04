import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongbaolichComponent } from './thongbaolich.component';

describe('ThongbaolichComponent', () => {
  let component: ThongbaolichComponent;
  let fixture: ComponentFixture<ThongbaolichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongbaolichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongbaolichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
