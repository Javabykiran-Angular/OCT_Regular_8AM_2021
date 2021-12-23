import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamComponent } from './query-param.component';

describe('QueryParamComponent', () => {
  let component: QueryParamComponent;
  let fixture: ComponentFixture<QueryParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
