import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZgloszeniaComponent } from './zgloszenia.component';

describe('ZgloszeniaComponent', () => {
  let component: ZgloszeniaComponent;
  let fixture: ComponentFixture<ZgloszeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZgloszeniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZgloszeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
