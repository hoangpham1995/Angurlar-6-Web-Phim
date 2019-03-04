import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeComponent } from './ve.component';

describe('VeComponent', () => {
  let component: VeComponent;
  let fixture: ComponentFixture<VeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
