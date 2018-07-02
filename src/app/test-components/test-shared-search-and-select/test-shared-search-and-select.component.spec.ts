import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSharedSearchAndSelectComponent } from './test-shared-search-and-select.component';

describe('TestSharedSearchAndSelectComponent', () => {
  let component: TestSharedSearchAndSelectComponent;
  let fixture: ComponentFixture<TestSharedSearchAndSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSharedSearchAndSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSharedSearchAndSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
