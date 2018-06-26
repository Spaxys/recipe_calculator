import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInShopDeleteComponent } from './ingredient-in-shop-delete.component';

describe('IngredientInShopDeleteComponent', () => {
  let component: IngredientInShopDeleteComponent;
  let fixture: ComponentFixture<IngredientInShopDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientInShopDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientInShopDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
