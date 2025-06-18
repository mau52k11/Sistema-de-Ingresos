import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoUnidadesResponsablesComponent } from './grupo-unidades-responsables.component';

describe('GrupoUnidadesResponsablesComponent', () => {
  let component: GrupoUnidadesResponsablesComponent;
  let fixture: ComponentFixture<GrupoUnidadesResponsablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrupoUnidadesResponsablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoUnidadesResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
