import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBapComponent } from './item-bap.component';

describe('ItemBapComponent', () => {
  let component: ItemBapComponent;
  let fixture: ComponentFixture<ItemBapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
