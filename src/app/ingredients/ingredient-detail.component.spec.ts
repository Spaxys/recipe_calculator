import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDetail } from './ingredient-detail.component';

describe('IngredientDetail.Component', () => {
  let component: IngredientDetail;
  let fixture: ComponentFixture<IngredientDetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientDetail ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
