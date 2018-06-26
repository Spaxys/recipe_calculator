import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInShopDetailComponent } from './ingredient-in-shop-detail.component';

describe('IngredientInShopDetailComponent', () => {
  let component: IngredientInShopDetailComponent;
  let fixture: ComponentFixture<IngredientInShopDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientInShopDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientInShopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
