import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavibarAdminComponent } from './navibar-admin.component';

describe('NavibarAdminComponent', () => {
  let component: NavibarAdminComponent;
  let fixture: ComponentFixture<NavibarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavibarAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavibarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
