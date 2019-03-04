import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BapnuocComponent } from './bapnuoc.component';

describe('BapnuocComponent', () => {
  let component: BapnuocComponent;
  let fixture: ComponentFixture<BapnuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BapnuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BapnuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
