import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarTemasComponent } from './gestionar-temas.component';

describe('GestionarTemasComponent', () => {
  let component: GestionarTemasComponent;
  let fixture: ComponentFixture<GestionarTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionarTemasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
