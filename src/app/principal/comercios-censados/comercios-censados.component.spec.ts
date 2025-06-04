import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComerciosCensadosComponent } from './comercios-censados.component';

describe('ComerciosCensadosComponent', () => {
  let component: ComerciosCensadosComponent;
  let fixture: ComponentFixture<ComerciosCensadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComerciosCensadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComerciosCensadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
