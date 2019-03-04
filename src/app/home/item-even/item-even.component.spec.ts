import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEvenComponent } from './item-even.component';

describe('ItemEvenComponent', () => {
  let component: ItemEvenComponent;
  let fixture: ComponentFixture<ItemEvenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEvenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
