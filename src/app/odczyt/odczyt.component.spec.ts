import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdczytComponent } from './odczyt.component';

describe('OdczytComponent', () => {
  let component: OdczytComponent;
  let fixture: ComponentFixture<OdczytComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdczytComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdczytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
