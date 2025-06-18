import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPolizaComponent } from './tipo-poliza.component';

describe('TipoPolizaComponent', () => {
  let component: TipoPolizaComponent;
  let fixture: ComponentFixture<TipoPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
