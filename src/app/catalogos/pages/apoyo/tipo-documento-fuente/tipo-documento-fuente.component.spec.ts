import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDocumentoFuenteComponent } from './tipo-documento-fuente.component';

describe('TipoDocumentoFuenteComponent', () => {
  let component: TipoDocumentoFuenteComponent;
  let fixture: ComponentFixture<TipoDocumentoFuenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoDocumentoFuenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoDocumentoFuenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
