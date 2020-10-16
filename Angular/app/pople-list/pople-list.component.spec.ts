import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopleListComponent } from './pople-list.component';

describe('PopleListComponent', () => {
  let component: PopleListComponent;
  let fixture: ComponentFixture<PopleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
