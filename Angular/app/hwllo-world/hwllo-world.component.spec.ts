import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HwlloWorldComponent } from './hwllo-world.component';

describe('HwlloWorldComponent', () => {
  let component: HwlloWorldComponent;
  let fixture: ComponentFixture<HwlloWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwlloWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HwlloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
