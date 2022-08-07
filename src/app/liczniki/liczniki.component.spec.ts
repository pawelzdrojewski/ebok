import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicznikiComponent } from './liczniki.component';

describe('LicznikiComponent', () => {
  let component: LicznikiComponent;
  let fixture: ComponentFixture<LicznikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicznikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicznikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
