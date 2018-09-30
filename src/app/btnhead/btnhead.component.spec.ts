import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnheadComponent } from './btnhead.component';

describe('BtnheadComponent', () => {
  let component: BtnheadComponent;
  let fixture: ComponentFixture<BtnheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
