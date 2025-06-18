import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupacionLineaPolizaComponent } from './agrupacion-linea-poliza.component';

describe('AgrupacionLineaPolizaComponent', () => {
  let component: AgrupacionLineaPolizaComponent;
  let fixture: ComponentFixture<AgrupacionLineaPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgrupacionLineaPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrupacionLineaPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
