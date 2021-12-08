import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfordirectiveComponent } from './ifordirective.component';

describe('IfordirectiveComponent', () => {
  let component: IfordirectiveComponent;
  let fixture: ComponentFixture<IfordirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfordirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfordirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
