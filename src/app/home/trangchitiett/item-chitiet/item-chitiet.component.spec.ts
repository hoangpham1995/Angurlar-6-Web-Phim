import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChitietComponent } from './item-chitiet.component';

describe('ItemChitietComponent', () => {
  let component: ItemChitietComponent;
  let fixture: ComponentFixture<ItemChitietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemChitietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemChitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
