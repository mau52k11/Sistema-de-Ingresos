import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraCuentasComponent } from './estructura-cuentas.component';

describe('EstructuraCuentasComponent', () => {
  let component: EstructuraCuentasComponent;
  let fixture: ComponentFixture<EstructuraCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstructuraCuentasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstructuraCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
