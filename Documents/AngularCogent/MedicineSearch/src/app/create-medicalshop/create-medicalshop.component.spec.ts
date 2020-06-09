import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicalshopComponent } from './create-medicalshop.component';

describe('CreateMedicalshopComponent', () => {
  let component: CreateMedicalshopComponent;
  let fixture: ComponentFixture<CreateMedicalshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMedicalshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedicalshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
