import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientList } from './ingredient-list.component';

describe('RecipeList.ComponentComponent', () => {
  let component: IngredientList;
  let fixture: ComponentFixture<IngredientList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
