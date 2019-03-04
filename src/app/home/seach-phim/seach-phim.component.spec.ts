import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachPhimComponent } from './seach-phim.component';

describe('SeachPhimComponent', () => {
  let component: SeachPhimComponent;
  let fixture: ComponentFixture<SeachPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeachPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
