import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDocumentoInternoComponent } from './tipo-documento-interno.component';

describe('TipoDocumentoInternoComponent', () => {
  let component: TipoDocumentoInternoComponent;
  let fixture: ComponentFixture<TipoDocumentoInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoDocumentoInternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoDocumentoInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
