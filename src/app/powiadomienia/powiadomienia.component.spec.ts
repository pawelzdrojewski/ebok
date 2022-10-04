import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowiadomieniaComponent } from './powiadomienia.component';

describe('PowiadomieniaComponent', () => {
  let component: PowiadomieniaComponent;
  let fixture: ComponentFixture<PowiadomieniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowiadomieniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowiadomieniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
