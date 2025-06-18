import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesResponsablesComponent } from './unidades-responsables.component';

describe('UnidadesResponsablesComponent', () => {
  let component: UnidadesResponsablesComponent;
  let fixture: ComponentFixture<UnidadesResponsablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnidadesResponsablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadesResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
