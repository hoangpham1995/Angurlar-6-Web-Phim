import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangchitiettComponent } from './trangchitiett.component';

describe('TrangchitiettComponent', () => {
  let component: TrangchitiettComponent;
  let fixture: ComponentFixture<TrangchitiettComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangchitiettComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangchitiettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
