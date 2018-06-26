import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInShopEditComponent } from './ingredient-in-shop-edit.component';

describe('IngredientInShopEditComponent', () => {
  let component: IngredientInShopEditComponent;
  let fixture: ComponentFixture<IngredientInShopEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientInShopEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientInShopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
