import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionOfficerComponent } from './inspection-officer.component';

describe('InspectionOfficerComponent', () => {
  let component: InspectionOfficerComponent;
  let fixture: ComponentFixture<InspectionOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
