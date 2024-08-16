import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicRequestComponent } from './mechanic-request.component';

describe('MechanicRequestComponent', () => {
  let component: MechanicRequestComponent;
  let fixture: ComponentFixture<MechanicRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicRequestComponent]
    });
    fixture = TestBed.createComponent(MechanicRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
