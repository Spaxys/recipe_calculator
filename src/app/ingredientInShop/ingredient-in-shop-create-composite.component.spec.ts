import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInShopCreateCompositeComponent } from './ingredient-in-shop-create-composite.component';

describe('IngredientInShopCreateCompositeComponent', () => {
  let component: IngredientInShopCreateCompositeComponent;
  let fixture: ComponentFixture<IngredientInShopCreateCompositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientInShopCreateCompositeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientInShopCreateCompositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
