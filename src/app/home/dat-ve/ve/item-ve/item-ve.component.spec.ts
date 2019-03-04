import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVeComponent } from './item-ve.component';

describe('ItemVeComponent', () => {
  let component: ItemVeComponent;
  let fixture: ComponentFixture<ItemVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
