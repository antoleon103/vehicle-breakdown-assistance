import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicheaderComponent } from './mechanicheader.component';

describe('MechanicheaderComponent', () => {
  let component: MechanicheaderComponent;
  let fixture: ComponentFixture<MechanicheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicheaderComponent]
    });
    fixture = TestBed.createComponent(MechanicheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
