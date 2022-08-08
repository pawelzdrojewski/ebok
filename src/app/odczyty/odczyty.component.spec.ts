import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdczytyComponent } from './odczyty.component';

describe('OdczytyComponent', () => {
  let component: OdczytyComponent;
  let fixture: ComponentFixture<OdczytyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdczytyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdczytyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
