import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosCompletoComponent } from './empleados-completo.component';

describe('EmpleadosCompletoComponent', () => {
  let component: EmpleadosCompletoComponent;
  let fixture: ComponentFixture<EmpleadosCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpleadosCompletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
