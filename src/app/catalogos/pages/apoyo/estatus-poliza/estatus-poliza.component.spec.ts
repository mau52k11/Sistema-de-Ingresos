import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusPolizaComponent } from './estatus-poliza.component';

describe('EstatusPolizaComponent', () => {
  let component: EstatusPolizaComponent;
  let fixture: ComponentFixture<EstatusPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstatusPolizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstatusPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
