import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasCuentasContablesComponent } from './consultas-cuentas-contables.component';

describe('ConsultasCuentasContablesComponent', () => {
  let component: ConsultasCuentasContablesComponent;
  let fixture: ComponentFixture<ConsultasCuentasContablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultasCuentasContablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasCuentasContablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
