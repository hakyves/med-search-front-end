import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBloodbankComponent } from './create-bloodbank.component';

describe('CreateBloodbankComponent', () => {
  let component: CreateBloodbankComponent;
  let fixture: ComponentFixture<CreateBloodbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBloodbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBloodbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
