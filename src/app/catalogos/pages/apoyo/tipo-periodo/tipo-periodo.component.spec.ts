import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPeriodoComponent } from './tipo-periodo.component';

describe('TipoPeriodoComponent', () => {
  let component: TipoPeriodoComponent;
  let fixture: ComponentFixture<TipoPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoPeriodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
