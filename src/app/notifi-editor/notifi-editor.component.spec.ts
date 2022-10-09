import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiEditorComponent } from './notifi-editor.component';

describe('NotifiEditorComponent', () => {
  let component: NotifiEditorComponent;
  let fixture: ComponentFixture<NotifiEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifiEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifiEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
