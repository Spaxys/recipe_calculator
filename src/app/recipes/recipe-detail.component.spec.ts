import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetail } from './recipe-detail.component';

describe('RecipeDetail.Component', () => {
  let component: RecipeDetail;
  let fixture: ComponentFixture<RecipeDetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetail ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
