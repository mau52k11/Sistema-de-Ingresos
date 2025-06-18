import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupacionDocumentoFuenteComponent } from './agrupacion-documento-fuente.component';

describe('AgrupacionDocumentoFuenteComponent', () => {
  let component: AgrupacionDocumentoFuenteComponent;
  let fixture: ComponentFixture<AgrupacionDocumentoFuenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgrupacionDocumentoFuenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrupacionDocumentoFuenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
