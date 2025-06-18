import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesHeaderComponent } from './opciones-header.component';

describe('OpcionesHeaderComponent', () => {
  let component: OpcionesHeaderComponent;
  let fixture: ComponentFixture<OpcionesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpcionesHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
