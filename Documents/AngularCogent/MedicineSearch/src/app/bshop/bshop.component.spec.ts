import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BshopComponent } from './bshop.component';

describe('BshopComponent', () => {
  let component: BshopComponent;
  let fixture: ComponentFixture<BshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
