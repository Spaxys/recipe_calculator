import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInShopCreateComponent } from './ingredient-in-shop-create.component';

describe('IngredientInShopCreateComponent', () => {
  let component: IngredientInShopCreateComponent;
  let fixture: ComponentFixture<IngredientInShopCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientInShopCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientInShopCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
