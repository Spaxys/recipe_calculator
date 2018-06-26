import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInShopListComponent } from './ingredient-in-shop-list.component';

describe('IngredientInShopListComponent', () => {
  let component: IngredientInShopListComponent;
  let fixture: ComponentFixture<IngredientInShopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientInShopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientInShopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
