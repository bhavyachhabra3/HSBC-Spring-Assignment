import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleModuleComponent } from './people-module.component';

describe('PeopleModuleComponent', () => {
  let component: PeopleModuleComponent;
  let fixture: ComponentFixture<PeopleModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
