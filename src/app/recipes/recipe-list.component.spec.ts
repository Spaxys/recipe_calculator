import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeList } from './recipe-list.component';

describe('RecipeList.ComponentComponent', () => {
  let component: RecipeList;
  let fixture: ComponentFixture<RecipeList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
