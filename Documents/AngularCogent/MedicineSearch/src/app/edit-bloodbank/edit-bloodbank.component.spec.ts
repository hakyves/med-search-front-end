import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBloodbankComponent } from './edit-bloodbank.component';

describe('EditBloodbankComponent', () => {
  let component: EditBloodbankComponent;
  let fixture: ComponentFixture<EditBloodbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBloodbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBloodbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
